import React, { useRef, useState } from "react";
import style from "./AddProductPage.module.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProductPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const projectNameRef = useRef("");
  const categoryRef = useRef("");
  const descriptionRef = useRef("");
  const imageRef = useRef(null);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const projectNameHandler = (event) => {
    setProjectName(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const imageHandler = (event) => {
    setImage([...event.target.files]);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div md={8} lg={6} xs={12} className={style.Container} expand="md">
      <div className={style.h2Title}>
        <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
          Add Your Product
        </h2>
      </div>
      <div className={style.form}>
        <Form onSubmit={submitFormHandler}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className={style.label}>UserName</Form.Label>
            <Form.Control
              type="text"
              className={style.customInput}
              ref={usernameRef}
              value={username}
              onChange={usernameHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={style.label}>Email address</Form.Label>
            <Form.Control
              className={style.customInput}
              type="email"
              ref={emailRef}
              value={email}
              onChange={emailHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={style.label}>Password</Form.Label>
            <Form.Control
              className={style.customInput}
              type="password"
              ref={passwordRef}
              value={password}
              onChange={passwordHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label className={style.label}>Project Name</Form.Label>
            <Form.Control
              type="text"
              className={style.customInput}
              ref={projectNameRef}
              value={projectName}
              onChange={projectNameHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoryName">
            <Form.Label className={style.label}>IProject Category</Form.Label>
            <Form.Control
              type="text"
              className={style.customInput}
              ref={categoryRef}
              value={category}
              onChange={categoryHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descriptionTextarea">
            <Form.Label className={style.label}>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className={style.customInput}
              ref={descriptionRef}
              value={description}
              onChange={descriptionHandler}
              required
            />
          </Form.Group>

          <Form.Group controlId="formImageUpload">
            <Form.Label className={style.label}>
              Upload Project Image
            </Form.Label>
            <Form.Control
              multiple
              type="file"
              accept="image/*"
              className={style.customInput}
              ref={imageRef}
              // value={image}
              onChange={imageHandler}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <div className={style.divBtn}>
            <Button className={style.btn} type="submit">
              Add Project
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProductPage;
