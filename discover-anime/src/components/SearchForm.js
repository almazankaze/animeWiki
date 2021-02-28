import "../styles/SearchForm.css";

const SearchForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
      </form>
    </div>
  );
};

export default SearchForm;
