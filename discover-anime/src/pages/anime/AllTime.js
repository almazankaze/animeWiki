import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAnime } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";
import Pagination from "../../components/pagination/Pagination";

import "./results.css";

function AllTime() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const navigate = useNavigate();

  let query = useQuery();

  let page = +query.get("page");

  if (page === 0) page = 1;

  const offset = page * 18 - 18;

  const dispatch = useDispatch();

  useEffect(() => {
    if (page < 0) {
      navigate("/notfound");
    } else {
      dispatch(getAnime(18, offset));
    }
  }, [dispatch, offset, navigate, page]);

  const popular = useSelector((state) => state.anime);

  if (popular.status >= 500) navigate("/error");

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">All Time Popular Anime</h2>
      <Search />
      <AnimeList
        anime={popular.anime}
        loading={popular.loading}
        error={popular.error}
      />
      <Pagination
        currentPage={page}
        pages={Math.ceil(popular.count / 18)}
        path="/popular?"
        loading={popular.loading}
      />
    </div>
  );
}

export default AllTime;
