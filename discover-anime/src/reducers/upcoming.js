import { FETCH_UPCOMING, LOADING, ERROR } from "../constants/actionTypes";

const upcomingReducer = (
  state = {
    anime: [],
    count: 0,
    loading: false,
    error: false,
    status: 200,
  },
  action
) => {
  switch (action.type) {
    case FETCH_UPCOMING:
      return {
        ...state,
        anime: action.payload,
        count: action.payload.meta.count,
        loading: false,
        error: false,
        status: 200,
      };
    case LOADING:
      return {
        ...state,
        anime: [],
        count: 0,
        loading: true,
        error: false,
        status: 200,
      };
    case ERROR:
      return {
        ...state,
        anime: [],
        count: 0,
        loading: false,
        error: true,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
