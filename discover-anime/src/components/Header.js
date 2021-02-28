import { Link } from "react-router-dom";
import "../styles/Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">AniSearch</h1>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
