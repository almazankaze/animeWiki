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
      <div className="logo">

        <div className="link-logo">
          <Logo />
        </div>

        <SearchForm />
      </div>

      <div className="hamburger-icon">
        <GiHamburgerMenu onClick={handleClick} />
      </div>

      <Modal isClicked={isClicked} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
