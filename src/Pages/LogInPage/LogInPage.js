import React, { useEffect, useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import style from "./LogInPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, LogIn } from "../../API/Api";
import { useAuth } from "../../Context/AuthContext";

const LogInPage = () => {

  const {updateUser, isAuthenticated, logout} = useAuth(); 
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      setForm({
        password: "",
        email: "",
      });
    }
  }, [isAuthenticated]);
  // const [error, setError] = useState("");
  const focus = useRef(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    focus.current.focus();
  }, []);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", form)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("form is ", form, "response is: ", response);
        updateUser(response.data.type);
      })
      .catch((error) => {
        console.log("error is ", error);
      });

    //   const enteredUsername = usernameRef.current.value;
    //   const enteredEmail = emailRef.current.value;
    //   const enteredPassword = passwordRef.current.value;
    //   console.log(enteredEmail, enteredUsername, enteredPassword);
    //   // props.onAddUser({username: enteredUsername, email: enteredEmail})
    //   try {
    //     const response = await axios
    //       .post(`http://127.0.0.1:8000/api/login`, {
    //         username: enteredUsername,
    //         email: enteredEmail,
    //         password: enteredPassword,
    //       })
    //       .then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //       });
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // try {
    //   const response = axios.post(loginURL, {
    //     username: enteredUsername,
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   });
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err);
    //  }

    //   axios.post(loginURL).then((res) => {
    // const submitFormHandler = async (event) => {
    //   event.preventDefault();
    //   try {
    //     let res = await axios.post(`${baseURL}/${LogIn}`, form);
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //     if (err.response.status === 401) {
    //       setError("Wrong Email or password");
    //     } else {
    //       setError("Internet Server Error");
    //     }
    //   }
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
                      {/* <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          UserName
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="userName"
                          className={style.formControl}
                          placeholder="Enter username"
                          ref={focus}
                          value={form.userName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group> */}

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
