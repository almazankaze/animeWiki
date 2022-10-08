import "../styles/SearchForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/results/${input}`);
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="myInput"
          type="text"
          name="name"
          id="name"
          placeholder="search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
