import { useGlobalContext } from "../context";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Home = () => {
  const { animeDB, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="main-content">
        <ul className="anime-card-collection">
          {animeDB.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              attributes={anime.attributes}
            ></Card>
          ))}
        </ul>
      </section>
    );
  }
};

export default Home;
