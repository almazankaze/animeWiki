import "../styles/SearchForm.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const [input, setInput] = useState("");

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/results/${input}`);
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
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
