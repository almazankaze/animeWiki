import React from "react";
import "../styles/AnimePage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loader";

const AnimePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
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
            pic: data.data[0].attributes.posterImage.small,
            synopsis: data.data[0].attributes.synopsis,
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
        <h2 className="section-title">no anime to display</h2>
      </section>
    );
  } else {
    const { name, otherName, jpName, pic, synopsis } = result;
    return (
      <section className="anime">
        <div className="anime-card img-card">
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
            <span className="info-data">rank :</span>
          </p>
          <p>
            <span className="info-data">episodes :</span>
          </p>
          <p>
            <span className="info-data">categories :</span>
          </p>
          <p>
            <span className="info-data">trailer :</span>
          </p>
        </div>
        <div className="anime-card summary-card">
          <p className="synopsis">{synopsis}</p>
        </div>
      </section>
    );
  }
};

export default AnimePage;
