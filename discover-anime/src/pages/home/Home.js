import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, batch } from "react-redux";
import { getUpcoming, getAnime, getCurrent } from "../../actions/anime";
import AnimeList from "../../components/animeList/AnimeList";
import Search from "../../components/searchform/Search";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(getCurrent(6, 0));
      dispatch(getUpcoming(6, 0));
      dispatch(getAnime(6, 0));
    });
  }, [dispatch]);

  const popular = useSelector((state) => state.anime);
  const upcoming = useSelector((state) => state.upcoming);
  const current = useSelector((state) => state.current);

  return (
    <div className="home app-container">
      <Search />
      <div className="home-section">
        <Link
          to="/anime/trending?page=1"
          className="home-section-title title-text-color"
        >
          Trending Now
        </Link>
        <AnimeList
          anime={current.anime}
          loading={current.loading}
          error={current.error}
        />
      </div>
      <div className="home-section">
        <Link
          to="/anime/upcoming"
          className="home-section-title title-text-color"
        >
          Upcoming
        </Link>
        <AnimeList
          anime={upcoming.anime}
          loading={upcoming.loading}
          error={upcoming.error}
        />
      </div>

      <div className="home-section">
        <Link
          to="/anime/popular"
          className="home-section-title title-text-color"
        >
          All time popular
        </Link>
        <AnimeList
          anime={popular.anime}
          loading={popular.loading}
          error={popular.error}
        />
      </div>
    </div>
  );
};

export default Home;
