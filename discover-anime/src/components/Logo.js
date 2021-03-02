import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="web-logo">
      <FaSearch />
      <h5>AniSearch</h5>
    </Link>
  );
};

export default Logo;
