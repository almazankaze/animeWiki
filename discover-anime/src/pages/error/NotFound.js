import { Link } from "react-router-dom";

import "./error.css";

function NotFound() {
  return (
    <div className="error-container">
      <div className="error-text-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-message">OOPS! PAGE NOT FOUND</h2>
        <h4 className="error-desc">
          Sorry, the page you're looking for does not exist. If you think
          something is broken, report a problem.
        </h4>
      </div>
      <div className="error-btns">
        <Link to="/" className="btn link-btn">
          Return Home
        </Link>
        <Link to="/" className="btn link-btn transparent-btn">
          Report Problem
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
