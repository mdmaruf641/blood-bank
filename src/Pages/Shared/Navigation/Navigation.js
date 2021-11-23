import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <Navbar className="main-nav" expand="lg">
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
          <span>Blood</span> Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-items" as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-items" as={HashLink} to="/allDonors">
              All Donors
            </Nav.Link>
            <Nav.Link className="nav-items" as={HashLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link className="nav-items" as={HashLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="nav-items" as={HashLink} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
