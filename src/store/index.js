import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import searchReducer from "./slice/searchDataSlice";
import introReducer from "./slice/introSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  search: searchReducer,
  intro: introReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  whitelist: ["cityList", "searchData", "introData"],
});
