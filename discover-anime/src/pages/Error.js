import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="container">
      <div className="center">
        <h2>Oops! Something went wrong!</h2>
        <Link to="/" className="btn primary-btn">
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
