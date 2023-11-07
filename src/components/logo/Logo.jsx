import React from "react";
import { Link } from "react-router-dom";
import icon from "../../img/jultra-icon.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={icon} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
