import axios from "axios";

const myUrl = "https://kitsu.io/api/edge";

const API = axios.create({ baseURL: myUrl });

export const fetchAnime = (limit, offset) =>
  API.get(
    `/anime?page[limit]=${limit}&page[offset]=${offset}&sort=popularityRank`
  );
export const fetchUpcoming = (limit, offset) =>
  API.get(
    `/anime?page[limit]=${limit}&page[offset]=${offset}&filter[status]=upcoming&sort=popularityRank`
  );
export const fetchCurrent = (limit, offset) =>
  API.get(
    `/anime?page[limit]=${limit}&page[offset]=${offset}&filter[status]=current&sort=popularityRank`
  );

export const fetchSearchedAnime = (limit, offset, searchTerm) =>
  API.get(
    `/anime?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${searchTerm}`
  );

export const fetchAnimeById = (id) => API.get(`/anime?filter[id]=${id}`);
