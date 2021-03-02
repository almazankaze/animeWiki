import "../styles/Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Discover New Anime</h1>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
