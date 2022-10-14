import {
  FETCH_ANIME,
  FETCH_UPCOMING,
  FETCH_CURRENT,
  FETCH_ANIME_BY_ID,
  FETCH_ANIME_BY_SEARCH,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getUpcoming = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchUpcoming(limit, offset);

    dispatch({ type: FETCH_UPCOMING, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getCurrent = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchCurrent(limit, offset);

    dispatch({ type: FETCH_CURRENT, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getAnime = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchAnime(limit, offset);

    dispatch({ type: FETCH_ANIME, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getSearchedAnime =
  (limit, offset, searchTerm) => async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await api.fetchSearchedAnime(limit, offset, searchTerm);

      dispatch({ type: FETCH_ANIME_BY_SEARCH, payload: data });
    } catch (e) {
      dispatch({ type: ERROR });
    }
  };

export const getSingleAnime = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchAnimeById(id);

    dispatch({ type: FETCH_ANIME_BY_ID, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};
