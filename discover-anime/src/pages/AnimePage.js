import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/loader/Loader";
import { Link } from "react-router-dom";

const AnimePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchAnime() {
      try {
        const [res1, res2] = await Promise.all([
          fetch(`https://kitsu.io/api/edge/anime?filter[id]=${id}`).then(
            (response) => response.json()
          ),
          fetch(`https://kitsu.io/api/edge/anime/${id}/categories`).then(
            (response) => response.json()
          ),
        ]);

        if (res1) {
          const newAnime = {
            name: res1.data[0].attributes.canonicalTitle,
            otherName: res1.data[0].attributes.titles.en_jp,
            jpName: res1.data[0].attributes.titles.ja_jp,
            rating: res1.data[0].attributes.ageRatingGuide,
            score: res1.data[0].attributes.averageRating,
            rank: res1.data[0].attributes.popularityRank,
            type: res1.data[0].attributes.subtype,
            epCount: res1.data[0].attributes.episodeCount,
            startDate: res1.data[0].attributes.startDate,
            endDate: res1.data[0].attributes.endDate,
            pic: res1.data[0].attributes.posterImage.medium,
            synopsis: res1.data[0].attributes.synopsis,
            trailer: res1.data[0].attributes.youtubeVideoId,
          };
          setResult(newAnime);

          const categories = res2.data.slice(0, 2).map((category) => {
            return category.attributes.slug;
          });

          // get anime that are similar to main one searched
          const similarResp = await fetch(
            encodeURI(
              `https://kitsu.io/api/edge/anime?page[limit]=8&filter[categories]=${categories.toString()}&sort=popularityRank`
            )
          );
          const similarData = await similarResp.json();

          if (similarData) {
            setSimilar(similarData.data);
          } else {
            setSimilar([]);
          }
        } else {
          setResult(null);
        }
      } catch (error) {
        setResult(null);
      }
      setLoading(false);
    }

    fetchAnime();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!result) {
    return (
      <section className="center-top">
        <h1>Oops! Something went wrong!</h1>
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
      <section className="anime-page-grid">
        <div className="img-card">
          <img src={pic} alt={name} />
        </div>
        <div className="content-container info-card">
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
            {startDate + (endDate ? " - " + endDate : "")}
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
        <div className="content-container summary-card">
          <p className="synopsis">{synopsis}</p>
        </div>

        <div className="content-container similar-card">
          <h2>Similar Anime</h2>
          <ul className="similar-list">
            {similar.map((anime) => (
              <div></div>
            ))}
          </ul>
        </div>
      </section>
    );
  }
};

export default AnimePage;
