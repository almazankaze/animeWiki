import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAnime } from "../../actions/anime";
import Loader from "../../components/loader/Loader";

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
  return <div className="anime-page app-container">Hello</div>;
}

export default SingleAnime;
