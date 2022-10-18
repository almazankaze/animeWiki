import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAnime, getGenres } from "../../actions/anime";
import Loader from "../../components/loader/Loader";
import ImageBanner from "../../components/imageBanner/ImageBanner";
import SimilarSlider from "../../components/slider/SimilarSlider";

function SingleAnime() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleAnime(id)).then((status) => {
      if (status === 200)
        dispatch(getGenres(`https://kitsu.io/api/edge/anime/${id}/genres`));
      else if (status === 404) navigate("/notfound");
      else navigate("/error");
    });
  }, [dispatch, id, navigate]);

  const animeState = useSelector((state) => state.singleAnime);

  const genres = animeState.genres.slice(0, 2).map((genre) => {
    return genre.attributes.slug;
  });

  if (animeState.loading) {
    <div className="anime-page">
      <Loader />
    </div>;
  }

  if (animeState.anime.length <= 0) return null;

  return (
    <div className="anime-page app-container">
      <ImageBanner
        image={animeState.anime.attributes.coverImage}
        title={animeState.anime.attributes.canonicalTitle}
        description={animeState.anime.attributes.synopsis}
        youtubeId={animeState.anime.attributes.youtubeVideoId}
      />

      <div className="anime-info-container">
        <div className="anime-header">
          <h2>Anime Info</h2>
        </div>
        <div className="anime-main">
          <div className="anime-stats">
            <h2 className="info-data desk-data">
              Score:
              <span>{` ${
                animeState.anime.attributes.averageRating || "none"
              }`}</span>
            </h2>
            <h2 className="info-data desk-data">
              Popularity:
              <span>{` #${
                animeState.anime.attributes.popularityRank || "unranked"
              }`}</span>
            </h2>
            <a
              href={`https://www.youtube.com/watch?v=${animeState.anime.attributes.youtubeVideoId}`}
              className="link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Trailer
            </a>
          </div>
          <div className="anime-desc">
            <h2>Synopsis</h2>
            <p>{animeState.anime.attributes.synopsis || "unavailable"}</p>
          </div>
        </div>
        <div className="anime-sidebar">
          <img
            src={animeState.anime.attributes.posterImage.small}
            alt="anime poster"
          />
          <div className="anime-info">
            <p className="info-data">
              Title:
              <span>{` ${animeState.anime.attributes.canonicalTitle}`}</span>
            </p>
            <p className="info-data">
              Other Name:
              <span>{` ${
                animeState.anime.attributes.titles.en_jp || "none"
              }`}</span>
            </p>
            <p className="info-data">
              JP Name:
              <span>{` ${
                animeState.anime.attributes.titles.ja_jp || "none"
              }`}</span>
            </p>
            <p className="info-data">
              Type:<span>{` ${animeState.anime.attributes.subtype}`}</span>
            </p>
            <p className="info-data">
              Episodes:
              <span>{` ${
                animeState.anime.attributes.episodeCount || "unknown"
              }`}</span>
            </p>
            <p className="info-data">
              Status:
              <span>{` ${
                animeState.anime.attributes.endDate
                  ? "Finished Airing"
                  : "Currently Airing"
              }`}</span>
            </p>
            <p className="info-data">
              Aired:
              <span>{` ${
                animeState.anime.attributes.startDate +
                " to " +
                (animeState.anime.attributes.endDate || "?")
              }`}</span>
            </p>
            <p className="info-data">
              Rating:
              <span>{` ${
                animeState.anime.attributes.ageRatingGuide || "not available"
              }`}</span>
            </p>
            <p className="info-data">
              Genres:
              <span>{` ${genres.join(", ")}`}</span>
            </p>
            <p className="info-data">
              Score:
              <span>{` ${
                animeState.anime.attributes.averageRating || "none"
              }`}</span>
            </p>
            <p className="info-data">
              Popularity:
              <span>{` ${
                animeState.anime.attributes.popularityRank || "unranked"
              }`}</span>
            </p>
          </div>
        </div>
        <div className="anime-footer">
          <h2>Similir Anime</h2>
          <SimilarSlider genres={genres.toString()} />
        </div>
      </div>
    </div>
  );
}

export default SingleAnime;
