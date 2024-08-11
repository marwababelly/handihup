import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "..//..//Context/AuthContext";

const RegisterNav = () => {
  const { state, logout } = useAuth();
  console.log('RegisterNav:', state);

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-5 ps-5">
          {!state.isAuthenticated && (
            <>
              <Nav.Link href="/SignUp">Sign up</Nav.Link>
              <Nav.Link href="/LogIn">Login</Nav.Link>
            </>
          )}
          {state.isAuthenticated && state.user && (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          )}
          {state.isAuthenticated && state.userRole === "owner" && (
            <Nav.Link href="/add-project-page">Add Project</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default RegisterNav;