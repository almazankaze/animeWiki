import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAnime } from "../../actions/anime";
import Loader from "../../components/loader/Loader";
import ImageBanner from "../../components/imageBanner/ImageBanner";

function SingleAnime() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAnime(id));
  }, [dispatch, id]);

  const animeState = useSelector((state) => state.singleAnime);

  console.log(animeState.anime);

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
        <img
          src={animeState.anime.attributes.posterImage.small}
          alt="anime poster"
        />
        <div className="anime-info">
          <p>
            <span className="info-data">title :</span> name
          </p>
          <p>
            <span className="info-data">other name :</span> otherName
          </p>
          <p>
            <span className="info-data">jp name :</span> jpName
          </p>
          <p>
            <span className="info-data">type :</span> type
          </p>
          <p>
            <span className="info-data">episodes :</span> epCount
          </p>
          <p>
            <span className="info-data">aired :</span> date
          </p>
          <p>
            <span className="info-data">rating :</span> rating
          </p>
          <p>
            <span className="info-data">score :</span> score
          </p>
          <p>
            <span className="info-data">popularity rank :</span> rank
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleAnime;
