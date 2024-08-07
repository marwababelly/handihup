import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "..//..//Context/AuthContext";

const RegisterNav = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-5 ps-5">
          {!isAuthenticated && (
            <>
              <Nav.Link href="/SignUp">Sign up</Nav.Link>
              <Nav.Link href="/LogIn">Login</Nav.Link>
            </>
          )}
          {isAuthenticated && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          <Nav.Link href="/add-project-page">Add Project</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* <div>
      <Nav.Item as="li" className="fs-5">
        {!isAuthenticated && (
          <>
            <Nav.Link href="/SignUp">Sign up</Nav.Link>
            <Nav.Link href="/LogIn">Login</Nav.Link>
          </>
        )}
      </Nav.Item>
      <Nav.Item as="li" className="fs-5">
        {isAuthenticated && <Nav.Link onClick={logout}>Logout</Nav.Link>}
      </Nav.Item>
      <Nav.Item as="li" className="fs-5">
        <Nav.Link href="/add-project-page">Add Project</Nav.Link>
      </Nav.Item>
    </div> */}
    </>
  );
};

export default RegisterNav;
