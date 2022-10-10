import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./search.css";

function Search() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = formRef.current["searchTerm"].value;

    if (searchTerm) {
      console.log(searchTerm);
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
