import { combineReducers } from "redux";
import animeReducer from "./anime";
import upcomingReducer from "./upcoming";
import currentReducer from "./current";

export default combineReducers({
  anime: animeReducer,
  upcoming: upcomingReducer,
  current: currentReducer,
});
