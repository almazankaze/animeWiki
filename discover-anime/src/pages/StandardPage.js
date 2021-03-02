import React from "react";
import StandardResults from "../components/StandardResults";

const AniUpcoming = ({ type, status }) => {
  return (
    <section className="container">
      <hr className="page-divider"></hr>
      <StandardResults type={type} status={status} />
    </section>
  );
};

export default AniUpcoming;
