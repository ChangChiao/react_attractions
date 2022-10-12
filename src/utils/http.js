import axios from "axios";
import { showToast } from "../utils/common";
import { getToken } from "../utils/api";
const service = axios.create({});

service.interceptors.request.use(
  (config) => {
    let params = config.params ?? config.data;
    console.log("6666", config);
    console.log("8777", params);
    Object.keys(params)?.map((vo) => {
      if (!params[vo]) delete params[vo];
    });
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
  async (error) => {
    const status = error?.response?.status;
    showToast(`error--${status}`, "error");
    if (status === 403 || status === 429) {
      localStorage.removeItem("token");
      const res = await getToken();
      if (res.access_token) {
        localStorage.setItem("token", res.access_token);
      }
    }
    return Promise.reject(error);
  }
);

export default service;
