import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import citySlice from "./slice/citySlice";
import counterReducer from "./slice/counterSlice";
import searchReducer from "./slice/searchDataSlice";
import introReducer from "./slice/introSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  city: citySlice,
  counter: counterReducer,
  search: searchReducer,
  intro: introReducer,
  //   users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  whitelist: ["cityList", "searchData", "introData"],
});
