import React from "react";
import { Link } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import MenuIcon from "@mui/icons-material/Menu";

import { useGlobalContext } from "../../context";

import "./navbar.css";
import Modal from "../modal/Modal";

function NavBar() {
  const { setShowMenu } = useGlobalContext();

  return (
    <div className="navbar">
      <div className="navbar-container app-container">
        <div className="nav-left">
          <div className="nav-title">
            <DevicesIcon className="nav-logo" titleAccess="AniSearch" />
            <h1>AniSearch</h1>
          </div>
        </div>

        <div className="nav-middle">
          <ul className="middle-nav-menu">
            <li>
              <Link to="/" className="nav-link">
                Pulls
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Issues
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Marketplace
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
