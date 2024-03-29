import { Link } from "react-router-dom";

import "./error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-text-container">
        <h1 className="error-title">ERROR</h1>
        <h2 className="error-message">OOPS! SOMETHING WENT WRONG</h2>
        <h4 className="error-desc">
          Sorry, something unexpected happened. If you think something is
          broken, report a problem.
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
};

export default Error;
