import "../styles/Card.css";

const Card = ({ id, attributes }) => {
  return (
    <div className="card">
      <img src={attributes.posterImage.small} alt={attributes.canonicalTitle} />
      <div className="overlay"></div>
      <div className="bottom-text">
        <p>{attributes.canonicalTitle}</p>
      </div>
    </div>
  );
};

export default Card;
