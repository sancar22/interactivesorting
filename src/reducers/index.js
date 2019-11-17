import configParamsReducer from "./configParams";
import isStartedReducer from "./isStarted";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  configuration: configParamsReducer,
  started: isStartedReducer,
});

export default allReducer;
