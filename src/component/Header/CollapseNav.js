import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";

const CollapseNav = () => {
  const {isAuthenticated , user} = useAuth();
  console.log(user?.type);
  return (
    <Navbar.Collapse id="responsive-navbar-nav" key={user?.role}>
      <Nav className="me-auto fs-5 ps-5">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
        <Nav.Link href="/Categories">Categories</Nav.Link>
        {(isAuthenticated && user?.type !== 'user') && (
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        )}
        {/* <Nav.Link href="/OwnerPage">Owner Page</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  );
};

export default CollapseNav;
