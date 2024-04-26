import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const CollapseNav = () => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto fs-5 ps-5">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Categories">Categories</Nav.Link>
        <Nav.Link href="#Dashbord">Dashbord</Nav.Link>
        <Nav.Link href="#Other">Other</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default CollapseNav;
