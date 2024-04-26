import React from "react";
import { Nav } from "react-bootstrap";

const RegisterNav = () => {
  return (
    <>
      <Nav.Item as="li" className="fs-5">
        <Nav.Link href="/SignUp">Sign up</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className="fs-5">
        <Nav.Link href="/LogIn">login</Nav.Link>
      </Nav.Item>
    </>
  );
};

export default RegisterNav;
