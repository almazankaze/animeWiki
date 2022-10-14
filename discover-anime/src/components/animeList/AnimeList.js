import React from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";

import "./animeList.css";

function AnimeList({ anime, loading, error }) {
  if (loading)
    return (
      <div className="anime-section">
        <Loader />
      </div>
    );
  if (anime.length <= 0)
    return (
      <div className="anime-section">
        <h2>No results found</h2>
      </div>
    );

  return (
    <div className="anime-section">
      <div className="cards-container">
        {anime.data.map((anime, i) => (
          <Card key={i} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
