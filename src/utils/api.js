import api from "../utils/http";
import { API_SPOT, API_RESTAURANT, API_ACTIVITY } from "../global/constant";

export const getRestaurant = (data) => {
  return api.get(API_RESTAURANT, { params: { ...data } });
};

export const getSpot = (data) => {
  return api.get(API_SPOT, { params: { ...data } });
};

export const getActivity = (data) => {
  return api.get(API_ACTIVITY, { params: { ...data } });
};
