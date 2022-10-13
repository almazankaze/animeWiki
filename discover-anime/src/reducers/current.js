import { FETCH_CURRENT, LOADING, ERROR } from "../constants/actionTypes";

const currentReducer = (
  state = {
    anime: [],
    count: 0,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_CURRENT:
      return {
        ...state,
        anime: action.payload,
        count: action.payload.meta.count,
        loading: false,
        error: false,
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, anime: [], count: 0, loading: false, error: true };
    default:
      return state;
  }
};

export default currentReducer;
