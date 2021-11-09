import api from "../utils/http";
import { API_SPOT, API_RESTAURANT, API_ACTIVITY } from "../global/constant";

const getCity = (data) => {
  const { City } = data;
  City && delete data.City;
  return { cityPath: City, data };
};

export const getRestaurant = (sendData) => {
  const { cityPath = "", data } = getCity(sendData);
  return api.get(API_RESTAURANT + `/${cityPath}`, { params: { ...data } });
};

export const getSpot = (sendData) => {
  const { cityPath = "", data } = getCity(sendData);
  return api.get(API_SPOT + `/${cityPath}`, { params: { ...data } });
};

export const getActivity = (sendData) => {
  const { cityPath = "", data } = getCity(sendData);
  return api.get(API_ACTIVITY + `/${cityPath}`, { params: { ...data } });
};
