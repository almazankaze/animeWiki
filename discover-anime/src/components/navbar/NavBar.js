import React from "react";
import { Link, useLocation } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import MenuIcon from "@mui/icons-material/Menu";

import { useGlobalContext } from "../../context";

import "./navbar.css";
import Modal from "../modal/Modal";

function NavBar() {
  const { setShowMenu } = useGlobalContext();

  const location = useLocation();

  if (location.pathname === "/notfound") return null;

  return (
    <div className="navbar">
      <div className="navbar-container app-container">
        <div className="nav-left">
          <Link to="/" className="nav-title">
            <DevicesIcon className="nav-logo" titleAccess="AniSearch" />
            <h1>AniSearch</h1>
          </Link>
        </div>

        <div className="nav-middle">
          <ul className="middle-nav-menu">
            <li>
              <Link to="/" className="nav-link">
                Search
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Community
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                News
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <div>
            <Link className="nav-link" to="/">
              Login
            </Link>
          </div>
        </div>

        <div className="menu-btn">
          <MenuIcon
            className="menu-icon"
            titleAccess="menu"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default NavBar;
