import axios from "axios";

const myUrl = "https://kitsu.io/api/edge";

const API = axios.create({ baseURL: myUrl });

export const fetchAnime = (limit) =>
  API.get(`/anime?page[limit]=${limit}&sort=popularityRank`);
export const fetchUpcoming = (limit) =>
  API.get(
    `/anime?page[limit]=${limit}&filter[status]=upcoming&sort=popularityRank`
  );
export const fetchCurrent = (limit) =>
  API.get(
    `/anime?page[limit]=${limit}&filter[status]=current&sort=popularityRank`
  );
export const fetchPage = () => API.get("/");
export const fetchAnimeBySearch = () => API.get("/");
