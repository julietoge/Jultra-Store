import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";

const NavBar = () => {
  const auth = useAuth();

  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">products</Link>
      <Link to="/profile">Profile</Link>
      {!auth.user && <Link to="/login">login</Link>}
    </nav>
  );
};

export default NavBar;
