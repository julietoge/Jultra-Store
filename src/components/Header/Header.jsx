import React from "react";
import Logo from "../logo/Logo";
import NavBar from "../navBar/navBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
