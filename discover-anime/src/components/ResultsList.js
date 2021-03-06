import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Card from "../components/Card";
import "../styles/Results.css";

const ResultsList = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const { searchName } = useParams();
  const searchURL = "https://kitsu.io/api/edge/anime?page[limit]=20&";

  useEffect(() => {
    setLoading(true);
    const fetchResults = async () => {
      try {
        const resp = await fetch(
          searchURL + encodeURI("filter[text]=" + searchName)
        );
        const data = await resp.json();

        if (data) {
          setResults(data.data);
        } else {
          setResults([]);
        }
      } catch (error) {
        setResults([]);
      }
      setLoading(false);
    };

    fetchResults();
  }, [searchName]);

  if (loading) {
    return <Loader />;
  } else if (results.length < 1) {
    return (
      <section className="notFound">
        <h1 className="section-title">Anime not found...</h1>
      </section>
    );
  } else {
    return (
      <div className="results">
        {results.map((anime) => (
          <Card
            key={anime.id}
            id={anime.id}
            attributes={anime.attributes}
            className="card"
          ></Card>
        ))}
      </div>
    );
  }
};

export default ResultsList;
