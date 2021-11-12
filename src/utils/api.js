import api from "../utils/http";
import { API_SPOT, API_RESTAURANT, API_ACTIVITY } from "../global/constant";
import jsSHA from "jssha";

const getAuthorizationHeader = () => {
  let AppID = process.env.REACT_APP_ID;
  let AppKey = process.env.REACT_APP_KEY;

  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return {
    Authorization: Authorization,
    "X-Date": GMTString,
    "Content-Type": "application/x-www-form-urlencoded",
  };
};

const setConfig = () => {
  const data = {
    headers: getAuthorizationHeader(),
  };

  return data;
};

const getCity = (data) => {
  const { city = "" } = data;
  delete data.city;
  return { cityPath: city, data };
};

export const getRestaurant = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  return api.get(API_RESTAURANT + `/${cityPath}`, { params: { ...data } }, setConfig);
};

export const getSpot = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  return api.get(API_SPOT + `/${cityPath}`, { params: { ...data } }, setConfig);
};

export const getActivity = (sendData) => {
  const { cityPath, data } = getCity(sendData);
  return api.get(API_ACTIVITY + `/${cityPath}`, { params: { ...data } }, setConfig);
};
