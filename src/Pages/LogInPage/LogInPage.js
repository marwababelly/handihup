import React, { useEffect, useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import style from "./LogInPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LogInPage = () => {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });
  const focus = useRef(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    focus.current.focus();
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", form)
      .then((response) => {
        console.log("form is ", form, "response is: ", response);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
    setForm("");
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
