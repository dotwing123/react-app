import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthorizeReducer from "./authorizer/reducers";

const rootReducer = combineReducers({
  Authentications: AuthorizeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
