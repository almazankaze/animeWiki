import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnime } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";

function AllTime() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnime(20));
  }, [dispatch]);

  const popular = useSelector((state) => state.anime);

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">All Time Popular Anime</h2>
      <Search />
      <AnimeList
        anime={popular.anime}
        loading={popular.loading}
        error={popular.error}
      />
    </div>
  );
}

export default AllTime;
