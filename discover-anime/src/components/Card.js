import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ id, attributes }) => {
  return (
    <div className="card">
      <Link to={`/page/${id}`}>
        <img
          src={attributes.posterImage.large}
          alt={attributes.canonicalTitle}
        />
        <div className="overlay"></div>
        <div className="bottom-text">
          <p className="limit-text">{attributes.canonicalTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
