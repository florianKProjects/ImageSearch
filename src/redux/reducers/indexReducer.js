import { combineReducers } from "@reduxjs/toolkit";
import SearchImageReducer from "./SearchImageReducer";
export default combineReducers({
  imagesSeachRes: SearchImageReducer,
});
