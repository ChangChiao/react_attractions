import jsSHA from "jssha";
import axios from "axios";

const getAuthorizationHeader = () => {
  let AppID = import.meta.env.VITE_APP_ID;
  let AppKey = import.meta.env.VITE_APP_KEY;

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
    if (status === 401) {
    }

    return Promise.reject(error);
  }
);

export default service;
