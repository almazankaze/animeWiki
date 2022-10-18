import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";
import Pagination from "../../components/pagination/Pagination";

import "./results.css";

function Trending() {
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
      dispatch(getCurrent(18, offset));
    }
  }, [dispatch, offset, navigate, page]);

  const current = useSelector((state) => state.current);

  if (current.status >= 500) navigate("/error");

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">Trending Anime</h2>
      <Search />
      <AnimeList
        anime={current.anime}
        loading={current.loading}
        error={current.error}
      />
      <Pagination
        currentPage={page}
        pages={Math.ceil(current.count / 18)}
        path="/trending?"
        loading={current.loading}
      />
    </div>
  );
}

export default Trending;
