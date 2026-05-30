import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import searchReducer from "./slice/searchDataSlice";
import introReducer from "./slice/introSlice";

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
  // RTK 2 dropped the `middleware: [...]` array form; thunk is included by
  // default. We only need to whitelist redux-persist's non-serializable actions.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
