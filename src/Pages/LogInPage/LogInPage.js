import React, { useEffect, useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import style from "./LogInPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, LogIn } from "../../API/Api";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiClient from "../../API/axios";
import { update } from "../../store/featuers/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const LogInPage = () => {
  const navigate = useNavigate();
  const { token, user, isAuth, userRole } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const { isAuthenticated, logout, updateUser, user, userRole } = useAuth();
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // const [error, setError] = useState("");
  const focus = useRef(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    focus.current.focus();
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();
    setErrorMessage("");
    apiClient
      .post("http://127.0.0.1:8000/api/login", form)
      .then((response) => {
        if (response.data.message !== "login done") {
          setErrorMessage("Invalid email or password.");
          return;
        }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isAuth", true);
        localStorage.setItem("userRole", response.data.user.type);
        dispatch(
          update({
            user: response.data.user,
            isAuth: true,
            token: response.data.token,
            userRole: response.data.user.type,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid email or password.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      });
    // setForm("");
  };

  return (
    <div>
      <Container className={style.Container}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className={style.card}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
                    Login
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submitFormHandler}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className={style.formControl}
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          ref={focus}
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          className={style.formControl}
                          type="password"
                          name="password"
                          placeholder="Password"
                          ref={focus}
                          value={form.password}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button className={style.btn} type="submit">
                          LogIn
                        </Button>
                      </div>
                      {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                          {errorMessage}
                        </div>
                      )}
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Doesn't have an account?{" "}
                        <Link to="/SignUp" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogInPage;
