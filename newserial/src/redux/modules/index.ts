import { combineReducers } from "redux";
import auth from "./auth";
import loading from "./loading";



/**
 *@author 신정은
 */
const rootReducer = combineReducers({
  auth,
  loading
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;