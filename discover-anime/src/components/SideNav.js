import "../styles/SideNav.css";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SideNav = () => {
  return (
    <nav className="sidenav">
      <Link to="/" className="web-logo">
        <FaSearch />
        <h5>AniSearch</h5>
      </Link>
      <div className="links">
        <hr className="sidebar-divider"></hr>
        <h3>Anime</h3>
        <NavLink exact={true} to="/" activeClassName="current" className="link">
          <h2>Popular</h2>
        </NavLink>
        <NavLink to="/aniUp" activeClassName="current" className="link">
          <h2>Upcoming</h2>
        </NavLink>

        <hr className="sidebar-divider"></hr>
        <h3>Manga</h3>
        <div className="link">
          <h2>Popular</h2>
        </div>
        <div className="link">
          <h2>Upcoming</h2>
        </div>
        <hr className="sidebar-divider"></hr>
        <NavLink to="/about" activeClassName="current" className="link">
          <h2>About</h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNav;
