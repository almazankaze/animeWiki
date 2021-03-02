import { Link } from "react-router-dom";
import "../styles/Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>AniSearch</h1>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
