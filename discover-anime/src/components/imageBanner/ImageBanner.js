import "./imageBanner.css";

function ImageBanner({ image, title, description, youtubeId }) {
  if (image)
    return (
      <div className="anime-image-container">
        <div className="anime-image">
          <img src={image.large} alt="anime cover" />
        </div>
        <div className="anime-image-content">
          <h2 className="anime-image-title">{title}</h2>
          <h4 className="anime-synopsis">{description}</h4>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          className="anime-link btn link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trailer
        </a>
      </div>
    );
}

export default ImageBanner;
