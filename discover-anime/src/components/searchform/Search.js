import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "./search.css";

function Search() {
  const formRef = useRef(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = formRef.current["searchTerm"].value;

    if (searchTerm) {
      navigate(`/anime?searchQuery=${searchTerm || "none"}&page=${1}`);
    }

    formRef.current.reset();
  };

  return (
    <div className="form-container">
      <form
        className="search-form"
        noValidate
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          name="searchTerm"
        />
        <SearchIcon
          onClick={handleSubmit}
          className="search-btn"
          titleAccess="search"
        ></SearchIcon>
      </form>
    </div>
  );
}

export default Search;
