import axios from "axios";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import style from "./CollapseNav.module.css";
import { useSelector } from "react-redux";

const CollapseNav = () => {
  // const { isAuthenticated, logout, updateUser, user, userRole } = useAuth();
  const { userRole, isAuth } = useSelector((state) => state.auth);
  // console.log(state.userRole);
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(`The URL/${productName}`);
      navigate(`/Projects/:projectId/Product`);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-5 ps-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Categories">Categories</Nav.Link>
          {isAuth && userRole !== "user" && (
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          )}
          <Nav.Link href="/OwnerPage">Owner Page</Nav.Link>
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
