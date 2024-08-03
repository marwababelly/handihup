import React from "react";
import { Nav } from "react-bootstrap";
import { useAuth } from '..//..//Context/AuthContext';

const RegisterNav = () => {
  const { isAuthenticated , logout } = useAuth();

  return (
    <>
      <Nav.Item as="li" className="fs-5">
        <Nav.Link href="/SignUp">Sign up</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className="fs-5">
        {isAuthenticated ? (
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        ) : (
          <Nav.Link href="/LogIn">Login</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item as="li" className="fs-5">
        <Nav.Link href="/add-project-page">Add Project</Nav.Link>
      </Nav.Item>
    </>
  );
};

export default RegisterNav;