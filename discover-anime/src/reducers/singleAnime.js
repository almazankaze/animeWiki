import {
  FETCH_ANIME_BY_ID,
  FETCH_GENRES,
  FETCH_SIMILAR,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

const singleAnimeReducer = (
  state = {
    anime: [],
    genres: [],
    similar: [],
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
        error: false,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload.data,
        error: false,
      };
    case FETCH_SIMILAR:
      return {
        ...state,
        similar: action.payload.data,
        loading: false,
        error: false,
      };
    case LOADING:
      return {
        ...state,
        anime: [],
        genres: [],
        loading: true,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        anime: [],
        genres: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default singleAnimeReducer;
