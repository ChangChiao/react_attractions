export const API_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism";
export const API_SPOT = API_URL + "/ScenicSpot";
export const API_RESTAURANT = API_URL + "/Restaurant";
export const API_ACTIVITY = API_URL + "/Activity";

export const TYPE_LIST = [
  { value: "activity", label: "節慶活動" },
  { value: "spot", label: "探索景點" },
  { value: "restaurant", label: "品嚐美食" },
];

export const MENU_LIST = [
  { name: "探索景點", path: "/attraction" },
  { name: "節慶活動", path: "/festival" },
  { name: "品嚐美食", path: "/food" },
];
