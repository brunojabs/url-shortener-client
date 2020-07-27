import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import redirectReducer from "./redirectReducer";
import topReducer from "./topReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  redirect: redirectReducer,
  top: topReducer,
});

export default rootReducer;
