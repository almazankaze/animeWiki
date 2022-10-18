import {
  FETCH_ANIME,
  FETCH_UPCOMING,
  FETCH_CURRENT,
  FETCH_ANIME_BY_ID,
  FETCH_ANIME_BY_SEARCH,
  FETCH_GENRES,
  FETCH_SIMILAR,
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
    dispatch({ type: ERROR, payload: e.response.status });
  }
};

export const getCurrent = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchCurrent(limit, offset);

    dispatch({ type: FETCH_CURRENT, payload: data });
  } catch (e) {
    dispatch({ type: ERROR, payload: e.response.status });
  }
};

export const getAnime = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchAnime(limit, offset);

    dispatch({ type: FETCH_ANIME, payload: data });
  } catch (e) {
    dispatch({ type: ERROR, payload: e.response.status });
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

    if (data.data.length === 0) {
      return 404;
    }

    dispatch({ type: FETCH_ANIME_BY_ID, payload: data });
    return 200;
  } catch (e) {
    dispatch({ type: ERROR });
    return e.response.status;
  }
};

export const getGenres = (url) => async (dispatch) => {
  try {
    const { data } = await api.fetchGenres(url);

    dispatch({ type: FETCH_GENRES, payload: data });
    return 200;
  } catch (e) {
    dispatch({ type: ERROR });
    return e.response.status;
  }
};

export const getSimilar = (genres, limit) => async (dispatch) => {
  try {
    const { data } = await api.fetchSimilar(genres, limit);

    dispatch({ type: FETCH_SIMILAR, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};
