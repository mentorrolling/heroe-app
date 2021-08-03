import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_super.png";
const HeroeNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <span className="ms-2">Superheroe Search</span>
        </Link>
      </div>
    </nav>
  );
};

export default HeroeNavbar;
