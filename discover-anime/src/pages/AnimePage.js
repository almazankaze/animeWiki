import React from "react";
import "../styles/AnimePage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loader";
import { Link } from "react-router-dom";

const AnimePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log(id);

    setLoading(true);
    async function fetchAnime() {
      try {
        const response = await fetch(
          `https://kitsu.io/api/edge/anime?filter[id]=${id}`
        );

        const data = await response.json();

        if (data) {
          const newAnime = {
            name: data.data[0].attributes.canonicalTitle,
            otherName: data.data[0].attributes.titles.en_jp,
            jpName: data.data[0].attributes.titles.ja_jp,
            rating: data.data[0].attributes.ageRatingGuide,
            score: data.data[0].attributes.averageRating,
            rank: data.data[0].attributes.popularityRank,
            type: data.data[0].attributes.subtype,
            epCount: data.data[0].attributes.episodeCount,
            startDate: data.data[0].attributes.startDate,
            endDate: data.data[0].attributes.endDate,
            pic: data.data[0].attributes.posterImage.medium,
            synopsis: data.data[0].attributes.synopsis,
            trailer: data.data[0].attributes.youtubeVideoId,
          };
          setResult(newAnime);
        } else {
          setResult(null);
        }
      } catch (error) {}
      setLoading(false);
    }

    fetchAnime();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!result) {
    return (
      <section className="notFound">
        <h1 className="section-title">Anime not found...</h1>
      </section>
    );
  } else {
    const {
      name,
      otherName,
      jpName,
      rating,
      score,
      rank,
      type,
      epCount,
      startDate,
      endDate,
      pic,
      synopsis,
      trailer,
    } = result;
    return (
      <section className="anime">
        <div className="img-card">
          <img src={pic} alt={name} />
        </div>
        <div className="anime-card info-card">
          <p>
            <span className="info-data">title :</span> {name}
          </p>
          <p>
            <span className="info-data">other name :</span> {otherName}
          </p>
          <p>
            <span className="info-data">jp name :</span> {jpName}
          </p>
          <p>
            <span className="info-data">type :</span> {type}
          </p>
          <p>
            <span className="info-data">episodes :</span> {epCount}
          </p>
          <p>
            <span className="info-data">aired :</span>{" "}
            {startDate + " - " + endDate}
          </p>
          <p>
            <span className="info-data">rating :</span> {rating}
          </p>
          <p>
            <span className="info-data">score :</span> {score}
          </p>
          <p>
            <span className="info-data">popularity rank :</span> {rank}
          </p>
          <p>
            <Link
              to={{
                pathname: "https://youtu.be/" + trailer,
              }}
              className="anime-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              trailer video
            </Link>
          </p>
        </div>
        <div className="anime-card summary-card">
          <p className="synopsis">{synopsis}</p>
        </div>

        <div className="anime-card similar-card"></div>
      </section>
    );
  }
};

export default AnimePage;
