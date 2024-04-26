import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import CollapseNav from "./CollapseNav";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
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
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <SignUp />
          <LogIn />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
