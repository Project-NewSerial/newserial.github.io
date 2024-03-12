import { combineReducers } from "redux";
import auth from "./auth";

/**
 *@author 신정은
 */
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
