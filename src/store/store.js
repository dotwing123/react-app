import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthorizeReducer from "./authorizer/reducers";
import DataReducer from "./datasource/reducer";

const rootReducer = combineReducers({
  Authentications: AuthorizeReducer,
  sampleData: DataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
