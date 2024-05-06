import React, { useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import style from "./LogInPage.module.css";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    // const enteredUsername = usernameRef.current.value;
    // const enteredEmail = emailRef.current.value;
    // const enteredPassword = passwordRef.current.value;

    // props.onAddUser({username: enteredUsername, email: enteredEmail})
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
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          UserName
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className={style.formControl}
                          placeholder="Enter username"
                          ref={usernameRef}
                          value={username}
                          onChange={usernameHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className={style.formControl}
                          type="email"
                          placeholder="Enter email"
                          ref={emailRef}
                          value={email}
                          onChange={emailHandler}
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
                          placeholder="Password"
                          ref={passwordRef}
                          value={password}
                          onChange={passwordHandler}
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
                        Don't have an account?{" "}
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
