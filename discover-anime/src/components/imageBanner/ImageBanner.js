import "./imageBanner.css";
import { Link } from "react-router-dom";

function ImageBanner({ image, title, description }) {
  return (
    <div className="anime-image-container">
      <div className="anime-image">
        <img src={image} alt="anime cover" />
      </div>
      <div className="anime-image-content">
        <h2 className="anime-image-title">{title}</h2>
        <h4 className="anime-synopsis">{description}</h4>
      </div>
      <Link to="/" className="anime-link btn link-btn">
        Trailer
      </Link>
    </div>
  );
}

export default ImageBanner;
