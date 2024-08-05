import axios from "axios";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";

const CollapseNav = () => {
  const {isAuthenticated , user} = useAuth();
  console.log(user?.type);
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.get(`The URL/${projectName}`);
      navigate("/Projects/:projectLink/Product/:productLink");
    } catch (error) {
      console.error("Failed to fetch project:", error);
    }
  };

  return (
    <>
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search projects..."
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default CollapseNav;
