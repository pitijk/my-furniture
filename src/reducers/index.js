import { combineReducers } from "redux";
import furnitures from "./furnitures";
import cart from "./cart";

export default combineReducers({
  furnitures,
  cart
});
