import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Container } from "react-bootstrap";

import logo from "../assets/logo_super.png";

const HeroeNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link text-white" to="/">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Superheroes
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeroeNavbar;
