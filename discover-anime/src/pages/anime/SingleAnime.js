import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAnime } from "../../actions/anime";

function SingleAnime() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAnime(id));
  }, [dispatch, id]);

  const anime = useSelector((state) => state.singleAnime);

  console.log(anime);

  return <div>SingleAnime</div>;
}

export default SingleAnime;
