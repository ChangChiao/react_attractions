import api from "../utils/http";
import { API_URL } from "../global/constant";

export const getAddress = (data) => {
  return api.get(API_URL, { params: { ...data } });
};

export const getAddress2 = () => {
  return api.get(API_URL);
};

export const getAddress3 = () => {
  return api.post(API_URL);
};
