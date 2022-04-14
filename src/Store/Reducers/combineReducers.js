import { combineReducers } from "redux";
import { singersReducer } from "./singerReducer";

export default combineReducers({
    singerList: singersReducer,
})