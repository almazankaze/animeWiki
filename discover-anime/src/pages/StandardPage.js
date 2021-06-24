import React from "react";
import StandardResults from "../components/StandardResults";

const AniUpcoming = ({ type, status }) => {
  return (
    <section className="main-content">
      <StandardResults type={type} status={status} />
    </section>
  );
};

export default AniUpcoming;
