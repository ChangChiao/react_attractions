export const API_URL = "https://tdx.transportdata.tw/api/basic/v2/Tourism";
export const API_SPOT = API_URL + "/ScenicSpot";
export const API_RESTAURANT = API_URL + "/Restaurant";
export const API_ACTIVITY = API_URL + "/Activity";
export const API_TDX = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
export const defaultCover = process.env.PUBLIC_URL + `/image/default/act.jpg`;
export const TYPE_LIST = [
  { value: "activity", label: "節慶活動" },
  { value: "spot", label: "探索景點" },
  { value: "restaurant", label: "品嚐美食" },
];

export const MENU_LIST = [
  { name: "探索景點", path: "spot" },
  { name: "節慶活動", path: "activity" },
  { name: "品嚐美食", path: "restaurant" },
];

export const CITY_LIST = [
  { label: "臺北市", value: "Taipei" },
  { label: "新北市", value: "NewTaipei" },
  { label: "桃園市", value: "Taoyuan" },
  { label: "臺中市", value: "Taichung" },
  { label: "臺南市", value: "Tainan" },
  { label: "高雄市", value: "Kaohsiung" },
  { label: "基隆市", value: "Keelung" },
  { label: "新竹市", value: "Hsinchu" },
  { label: "新竹縣", value: "HsinchuCounty" },
  { label: "苗栗縣", value: "MiaoliCounty" },
  { label: "彰化縣", value: "ChanghuaCounty" },
  { label: "南投縣", value: "NantouCounty" },
  { label: "雲林縣", value: "YunlinCounty" },
  { label: "嘉義縣", value: "ChiayiCounty" },
  { label: "嘉義市", value: "Chiayi" },
  { label: "屏東縣", value: "PingtungCounty" },
  { label: "宜蘭縣", value: "YilanCounty" },
  { label: "花蓮縣", value: "HualienCounty" },
  { label: "臺東縣", value: "TaitungCounty" },
  { label: "金門縣", value: "KinmenCounty" },
  { label: "澎湖縣", value: "PenghuCounty" },
  { label: "連江縣", value: "LienchiangCounty" },
];
