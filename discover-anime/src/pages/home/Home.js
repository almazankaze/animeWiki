import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { getUpcoming, getAnime, getCurrent } from "../../actions/anime";
import AnimeSection from "../../components/animeSection/AnimeSection";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(getCurrent(6));
      dispatch(getUpcoming(6));
      dispatch(getAnime(6));
    });
  }, [dispatch]);

  const popular = useSelector((state) => state.anime);
  const upcoming = useSelector((state) => state.upcoming);
  const current = useSelector((state) => state.current);

  return (
    <div className="home app-container">
      <div className="home-section">
        <div className="home-section-title">
          <h3 className="title-text-color">Trending Now</h3>
        </div>
        <AnimeSection
          anime={current.anime}
          loading={current.loading}
          error={current.error}
        />
      </div>
      <div className="home-section">
        <div className="home-section-title">
          <h3 className="title-text-color">Upcoming</h3>
        </div>
        <AnimeSection
          anime={upcoming.anime}
          loading={upcoming.loading}
          error={upcoming.error}
        />
      </div>

      <div className="home-section">
        <div className="home-section-title">
          <h3 className="title-text-color">All time popular</h3>
        </div>
        <AnimeSection
          anime={popular.anime}
          loading={popular.loading}
          error={popular.error}
        />
      </div>
    </div>
  );
};

export default Home;
