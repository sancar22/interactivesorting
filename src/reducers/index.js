import configParamsReducer from "./configParams";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    configuration: configParamsReducer,
});

export default allReducer;
