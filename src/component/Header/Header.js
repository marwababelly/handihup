import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import RegisterNav from "./RegisterNav";
import CollapseNav from "./CollapseNav";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="HandiHub logo"
          />
          <Navbar.Text className="fs-1">HandiHub</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <CollapseNav />
        <Nav defaultActiveKey="/" as="ul">
          <RegisterNav />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
