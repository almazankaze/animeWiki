import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAnime, getCharacters } from "../../actions/anime";
import Loader from "../../components/loader/Loader";
import ImageBanner from "../../components/imageBanner/ImageBanner";

function SingleAnime() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAnime(id)).then((success) => {
      if (success)
        dispatch(getCharacters(`https://kitsu.io/api/edge/anime/${id}/genres`));
    });
  }, [dispatch, id]);

  const animeState = useSelector((state) => state.singleAnime);

  const genres = animeState.characters.map((genre) => {
    return genre.attributes.slug;
  });

  console.log(genres.toString());

  if (animeState.loading) {
    <div className="anime-page">
      <Loader />
    </div>;
  }

  if (animeState.anime.length <= 0) return null;

  return (
    <div className="anime-page app-container">
      <ImageBanner
        image={animeState.anime.attributes.coverImage.large}
        title={animeState.anime.attributes.canonicalTitle}
        description={animeState.anime.attributes.synopsis}
      />

      <div className="anime-info-container">
        <div className="anime-header">
          <h2>Anime Info</h2>
        </div>
        <div className="anime-main">
          <div className="anime-desc">
            <h3>Synopsis</h3>
            <p>{animeState.anime.attributes.synopsis}</p>
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
              <span>{` ${animeState.anime.attributes.titles.en_jp}`}</span>
            </p>
            <p className="info-data">
              JP Name:
              <span>{` ${animeState.anime.attributes.titles.ja_jp}`}</span>
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
              <span>{` ${animeState.anime.attributes.ageRatingGuide}`}</span>
            </p>
            <p className="info-data">
              Score:
              <span>{` ${animeState.anime.attributes.averageRating}`}</span>
            </p>
            <p className="info-data">
              Popularity:
              <span>{` ${animeState.anime.attributes.popularityRank}`}</span>
            </p>
          </div>
        </div>
        <div className="anime-content1"></div>
        <div className="anime-content2"></div>
        <div className="anime-footer"></div>
      </div>
    </div>
  );
}

export default SingleAnime;
