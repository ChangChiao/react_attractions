import jsSHA from "jssha";
import axios from "axios";
import { showToast } from "../utils/common";

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

const service = axios.create({
  headers: getAuthorizationHeader(),
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { status } = error.response;
    showToast(`error--${status}`, "error");
    return Promise.reject(error);
  }
);

export default service;
