import "../styles/Home.css";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Home = () => {
  const { animeDB, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="home">
        <div className="results">
          {animeDB.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              attributes={anime.attributes}
              className="card"
            ></Card>
          ))}
        </div>
      </section>
    );
  }
};

export default Home;
