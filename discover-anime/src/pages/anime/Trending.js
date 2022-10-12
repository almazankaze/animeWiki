import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";

import "./results.css";

function Trending() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent(20));
  }, [dispatch]);

  const current = useSelector((state) => state.current);

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">Trending Anime</h2>
      <Search />
      <AnimeList
        anime={current.anime}
        loading={current.loading}
        error={current.error}
      />
    </div>
  );
}

export default Trending;
