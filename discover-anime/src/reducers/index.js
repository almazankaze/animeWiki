import { combineReducers } from "redux";
import animeReducer from "./anime";
import upcomingReducer from "./upcoming";
import currentReducer from "./current";
import singleAnimeReducer from "./singleAnime";

export default combineReducers({
  anime: animeReducer,
  upcoming: upcomingReducer,
  current: currentReducer,
  singleAnime: singleAnimeReducer,
});
