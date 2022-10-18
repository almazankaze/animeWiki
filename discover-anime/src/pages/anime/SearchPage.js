import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSearchedAnime, getAnime } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";
import Pagination from "../../components/pagination/Pagination";

import "./results.css";

function SearchPage() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const navigate = useNavigate();

  let query = useQuery();

  let page = +query.get("page");
  if (page === 0) page = 1;

  const offset = page * 18 - 18;

  let searchQuery = query.get("searchQuery");
  if (searchQuery === null) searchQuery = "";

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") {
      dispatch(getAnime(18, offset));
    } else if (page < 0) {
      navigate("/notfound");
    } else {
      dispatch(getSearchedAnime(18, offset, searchQuery));
    }
  }, [dispatch, offset, navigate, page, searchQuery]);

  const results = useSelector((state) => state.anime);

  if (results.status >= 500) navigate("/error");

  return (
    <div className="results-page app-container">
      <Search />
      <AnimeList
        anime={results.anime}
        loading={results.loading}
        error={results.error}
      />
      <Pagination
        currentPage={page}
        pages={Math.ceil(results.count / 18)}
        path={`?searchQuery=${searchQuery}&`}
        loading={results.loading}
      />
    </div>
  );
}

export default SearchPage;
