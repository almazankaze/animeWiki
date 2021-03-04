import { useState } from "react";
import "../styles/Header.css";
import SearchForm from "./SearchForm";
import Logo from "../components/Logo.js";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./Modal";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <header className="header">
      <div className="hamburger-icon">
        <GiHamburgerMenu onClick={handleClick} />
      </div>
      <div className="logo">
        <div className="text-logo">
          <h1>Discover</h1>
        </div>

        <div className="link-logo">
          <Logo />
        </div>

        <SearchForm />
      </div>
      <hr className="page-divider"></hr>

      <Modal isClicked={isClicked} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
