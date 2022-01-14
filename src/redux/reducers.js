import { combineReducers } from "redux";
import filterReducer from "./filters/reducer"

const reducers = combineReducers({
    filter: filterReducer
})

export default reducers