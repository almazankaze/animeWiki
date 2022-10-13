import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

function Card({ anime }) {
  return (
    <Link
      to={`/anime/infopage/${anime.id}`}
      className="card-container sub-text-color"
    >
      <div className="card">
        <img
          src={anime.attributes.posterImage.large}
          alt={anime.attributes.canonicalTitle}
        />
      </div>
      <h4>{anime.attributes.canonicalTitle}</h4>
    </Link>
  );
}

export default Card;
