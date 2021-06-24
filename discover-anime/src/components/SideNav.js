import "../styles/SideNav.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const SideNav = () => {
  return (
    <nav className="sidenav bg-main">
      <Logo />
      <div className="links">
        <hr className="sidebar-divider"></hr>
        <h3>Anime</h3>
        <NavLink exact={true} to="/" activeClassName="current" className="link">
          <h2>Popular</h2>
        </NavLink>
        <NavLink to="/anime/ongoing" activeClassName="current" className="link">
          <h2>Ongoing</h2>
        </NavLink>
        <NavLink
          to="/anime/upcoming"
          activeClassName="current"
          className="link"
        >
          <h2>Upcoming</h2>
        </NavLink>

        <hr className="sidebar-divider"></hr>
        <h3>Manga</h3>
        <div className="link">
          <h2>Popular</h2>
        </div>
        <div className="link">
          <h2>Ongoing</h2>
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
