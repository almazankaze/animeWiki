import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Card from "../components/Card";

const StandardResults = ({ type, status }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const url = `https://kitsu.io/api/edge/${type}?page[limit]=20&filter[status]=${status}&sort=popularityRank`;

  useEffect(() => {
    setLoading(true);
    const fetchResults = async () => {
      try {
        const resp = await fetch(encodeURI(url));
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
  }, [url]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <ul className="anime-card-collection">
        {results.map((anime) => (
          <Card
            key={anime.id}
            id={anime.id}
            attributes={anime.attributes}
          ></Card>
        ))}
      </ul>
    );
  }
};

export default StandardResults;
