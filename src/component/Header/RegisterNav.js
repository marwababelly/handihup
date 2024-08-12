import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/featuers/auth/authSlice";
import { useNavigate } from "react-router";

const RegisterNav = () => {
  // const { isAuth, logout, updateUser, user, userRole } = useAuth();
  const { token, user, userRole, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-5 ps-5">
          {!isAuth && (
            <>
              <Nav.Link href="/SignUp">Sign up</Nav.Link>
              <Nav.Link href="/LogIn">Login</Nav.Link>
            </>
          )}
          {isAuth && user && (
            <Nav.Link
              onClick={() => {
                localStorage.clear();
                dispatch(
                  update({
                    user: null,
                    isAuth: false,
                    token: null,
                    userRole: null,
                  })
                );
                navigate("/SignUp");
              }}
            >
              Logout
            </Nav.Link>
          )}
          {isAuth && userRole === "owner" && (
            <Nav.Link href="/add-project-page">Add Project</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default RegisterNav;
