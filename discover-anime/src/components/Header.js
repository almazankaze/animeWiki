import "../styles/Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <h1>AniSearch</h1>
      <SearchForm />
    </header>
  );
};

export default Header;
