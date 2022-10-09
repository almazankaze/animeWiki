import {
  FETCH_ANIME,
  FETCH_ANIME_BY_SEARCH,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

const animeReducer = (
  state = {
    anime: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_ANIME:
    case FETCH_ANIME_BY_SEARCH:
      return {
        ...state,
        anime: action.payload,
        loading: false,
        error: false,
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, anime: [], loading: false, error: true };
    default:
      return state;
  }
};

export default animeReducer;
