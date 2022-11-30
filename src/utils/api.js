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

const converStr = (str) => {
  console.log("str", str);
  if (str === "") return str;
  return `/${str}`;
};

const getCity = (data) => {
  const { city = "" } = data;
  delete data.city;
  console.log("city", city);
  return { cityPath: converStr(city), data };
};

export const getRestaurant = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  let config = {
    params: {
      ...data,
    },
  };
  return api.get(API_RESTAURANT + `${cityPath}`, config);
};

export const getSpot = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  let config = {
    params: {
      ...data,
    },
  };
  return api.get(API_SPOT + `${cityPath}`, config);
};

export const getActivity = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  let config = {
    params: {
      ...data,
    },
  };
  return api.get(API_ACTIVITY + `${cityPath}`, config);
};

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
