import axios from "axios";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import style from "./CollapseNav.module.css";

const CollapseNav = () => {
  const { isAuthenticated, user } = useAuth();
  console.log(user?.type);
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.get(`The URL/${productName}`);
      navigate(`/Projects/:projectId/Product`);
      console.log(result);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav" key={user?.role}>
        <Nav className="me-auto fs-5 ps-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Categories">Categories</Nav.Link>
          {isAuthenticated && user?.type !== "user" && (
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button type="submit" className={style.searchBtn}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default CollapseNav;
