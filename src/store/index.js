import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import todoReducer from "./slice/todo";
import counterReducer from "./slice/counterSlice";
import usersReducer from "./slice/apiTest";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  whitelist: ["city"],
});
