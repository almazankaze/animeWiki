import { FETCH_ANIME_BY_ID, LOADING, ERROR } from "../constants/actionTypes";

const singleAnimeReducer = (
  state = {
    anime: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_ANIME_BY_ID:
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

export default singleAnimeReducer;
