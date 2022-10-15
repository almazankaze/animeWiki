import {
  FETCH_ANIME_BY_ID,
  FETCH_CHARACTERS,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

const singleAnimeReducer = (
  state = {
    anime: [],
    characters: [],
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
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload.data };
    case LOADING:
      return { ...state, anime: [], loading: true, error: false };
    case ERROR:
      return {
        ...state,
        anime: [],
        characters: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default singleAnimeReducer;
