import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcoming } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";

import "./results.css";

function Upcoming() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcoming(20));
  }, [dispatch]);

  const upcoming = useSelector((state) => state.upcoming);

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">Upcoming Anime</h2>
      <Search />
      <AnimeList
        anime={upcoming.anime}
        loading={upcoming.loading}
        error={upcoming.error}
      />
    </div>
  );
}

export default Upcoming;
