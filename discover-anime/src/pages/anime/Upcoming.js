import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUpcoming } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";
import Pagination from "../../components/pagination/Pagination";

import "./results.css";

function Upcoming() {
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
      dispatch(getUpcoming(18, offset));
    }
  }, [dispatch, offset, navigate, page]);

  const upcoming = useSelector((state) => state.upcoming);

  if (upcoming.status >= 500) navigate("/error");

  return (
    <div className="results-page app-container">
      <h2 className="title-text-color">Upcoming Anime</h2>
      <Search />
      <AnimeList
        anime={upcoming.anime}
        loading={upcoming.loading}
        error={upcoming.error}
      />
      <Pagination
        currentPage={page}
        pages={Math.ceil(upcoming.count / 18)}
        path="/upcoming?"
        loading={upcoming.loading}
      />
    </div>
  );
}

export default Upcoming;
