import configParamsReducer from "./configParams";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  config: configParamsReducer,
});

export default allReducer;
