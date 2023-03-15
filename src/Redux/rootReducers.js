import { combineReducers } from "redux";
import apiReducer from "./Reducers/api";
import authReducer from "./Reducers/auth"

const rootReducer = combineReducers({
    apiReducer,
    authReducer,
})

export default rootReducer