import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer //auth piece of state is being produced by an authReducer
});
