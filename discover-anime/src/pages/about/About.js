import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about app-container">
      <h2>
        Made for users to discover new anime to watch. It is a project made for
        my portfolio where I learned to use react routers and how to work with
        an API. The API used was Kitsu which can be found{" "}
        <a
          href="https://kitsu.docs.apiary.io/#introduction/json:api"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </h2>
    </div>
  );
};

export default About;
