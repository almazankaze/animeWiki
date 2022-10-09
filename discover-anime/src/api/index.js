import axios from "axios";

const myUrl =
  "https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank";

const API = axios.create({ baseURL: myUrl });

export const fetchAnime = () => API.get();
export const fetchPage = () => API.get("/");
export const fetchAnimeBySearch = () => API.get("/");
