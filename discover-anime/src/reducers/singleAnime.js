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
        anime: action.payload.data[0],
        loading: false,
        error: false,
      };
    case LOADING:
      return { ...state, anime: [], loading: true, error: false };
    case ERROR:
      return { ...state, anime: [], loading: false, error: true };
    default:
      return state;
  }
};

export default singleAnimeReducer;
