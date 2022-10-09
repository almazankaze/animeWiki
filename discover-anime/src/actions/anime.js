import {
  FETCH_ANIME,
  FETCH_ANIME_BY_SEARCH,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getAnime = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchAnime();

    dispatch({ type: FETCH_ANIME, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getPage = (page) => async (dispatch) => {
  try {
    if (page === null) page = 1;

    dispatch({ type: LOADING });
    const { data } = await api.fetchPage(page);

    dispatch({ type: FETCH_ANIME, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getAnimeBySearch = (searchQuery, page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchAnimeBySearch(searchQuery, page);

    dispatch({ type: FETCH_ANIME_BY_SEARCH, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};
