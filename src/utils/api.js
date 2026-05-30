import api from "../utils/http";
import { API_SPOT, API_RESTAURANT, API_ACTIVITY, API_TDX } from "../global/constant";
import jsSHA from "jssha";

// const getAuthorizationHeader = () => {
//   let AppID = process.env.REACT_APP_ID;
//   let AppKey = process.env.REACT_APP_KEY;

//   const GMTString = new Date().toGMTString();
//   const ShaObj = new jsSHA("SHA-1", "TEXT");
//   ShaObj.setHMACKey(AppKey, "TEXT");
//   ShaObj.update("x-date: " + GMTString);
//   let HMAC = ShaObj.getHMAC("B64");
//   let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
//   return {
//     Authorization: Authorization,
//     "X-Date": GMTString,
//     "Content-Type": "application/x-www-form-urlencoded",
//   };
// };

const getAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  return {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
};

// 將多個 OData 條件以 and 串接（忽略空字串）
const mergeFilter = (...parts) => parts.filter(Boolean).join(" and ");

// V2.1 無 /{City} 路徑，改以 PostalAddress/City 篩選（city 須為中文縣市名，如「臺北市」）
const cityFilter = (city) => (city ? `PostalAddress/City eq '${city}'` : "");

// V2.1 影像改為 Images 陣列，組回舊版 Picture 結構供畫面沿用
const buildPicture = (images = []) => ({
  PictureUrl1: images?.[0]?.URL || "",
  PictureUrl2: images?.[1]?.URL || "",
  PictureUrl3: images?.[2]?.URL || "",
});

// V2.1 地址改為 PostalAddress 巢狀結構，組回單行地址字串
const buildAddress = (postal = {}) => {
  if (!postal) return "";
  return [postal.City, postal.Town, postal.StreetAddress].filter(Boolean).join("");
};

// V2.1 電話改為 Telephones 陣列，取第一筆作為主要電話
const mainPhone = (telephones = []) => telephones?.[0]?.Tel || "";

// 共用欄位轉換（影像、地址、電話、縣市）
const commonFields = (v) => ({
  Picture: buildPicture(v.Images),
  Address: buildAddress(v.PostalAddress),
  City: v.PostalAddress?.City || "",
  Phone: mainPhone(v.Telephones),
});

// 觀光景點 Attraction(V2.1) → ScenicSpot(舊版欄位)
const normalizeSpot = (v) => ({
  ...v,
  ...commonFields(v),
  ScenicSpotID: v.AttractionID,
  ScenicSpotName: v.AttractionName,
  DescriptionDetail: v.Description,
  OpenTime: v.ServiceTimeInfo,
  TicketInfo: v.FeeInfo,
});

// 觀光活動 Event(V2.1) → Activity(舊版欄位)
const normalizeActivity = (v) => ({
  ...v,
  ...commonFields(v),
  ActivityID: v.EventID,
  ActivityName: v.EventName,
  StartTime: v.StartDateTime,
  EndTime: v.EndDateTime,
  Organizer: v.Organizations?.[0]?.Name || "",
});

// 觀光餐飲 Restaurant(V2.1) → 舊版欄位（ID/Name 不變）
const normalizeRestaurant = (v) => ({
  ...v,
  ...commonFields(v),
  OpenTime: v.ServiceTimeInfo,
});

// V2.1 回傳為 { value: [...] }，統一取出陣列並做欄位轉換
const fetchList = async (url, sendData, normalize) => {
  const { city, ...rest } = sendData;
  const params = {
    ...rest,
    $filter: mergeFilter(rest.$filter, cityFilter(city)),
  };
  const res = await api.get(url, { params });
  return (res?.value ?? []).map(normalize);
};

export const getRestaurant = (sendData) => fetchList(API_RESTAURANT, sendData, normalizeRestaurant);

export const getSpot = (sendData) => fetchList(API_SPOT, sendData, normalizeSpot);

export const getActivity = (sendData) => fetchList(API_ACTIVITY, sendData, normalizeActivity);

export const getToken = () => {
  const data = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_ID,
    client_secret: process.env.REACT_APP_KEY,
  };
  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  return api.post(API_TDX, new URLSearchParams(data), config);
};
