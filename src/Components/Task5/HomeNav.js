import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./images/star.svg";

function HomeNav() {
  return (
    <div>
      <Navbar variant="light" style={{ display: "flex" }}>
        <Container style={{ marginTop: "20px" }}>
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "30px", fontWeigt: "bold" }}
          >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              //   className="d-inline-block align-top"
              style={{ marginLeft: "70px" }}
            />{" "}
            Logo
          </Navbar.Brand>
        </Container>
        <Container style={{ marginRight: "280px", marginTop: "20px" }}>
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" style={{ color: "black" }}>
              Stores
            </Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: "black" }}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "black" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
