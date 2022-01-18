import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import propertiesReducer from "./properties/reducer";

const reducers = combineReducers({
  filter: filterReducer,
  properties: propertiesReducer
});

export default reducers;
