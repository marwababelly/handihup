import React, { useRef, useState } from "react";
import style from "./AddProductPage.module.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const AddProductPage = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    available: true,
    project_id: "",
    // category: "",
    description: "",
    // image: [null],
  });

  const focus = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    axios
      .post("http://127.0.0.1:8000/api/Projects/1/product" , form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("form is ", form, "response is: ", response);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
    setForm("");
  };
  console.log(form);

  return (
    <div md={8} lg={6} xs={12} className={style.Container} expand="md">
      <div className={style.h2Title}>
        <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
          Add Your Product
        </h2>
      </div>
      <div className={style.form}>
        <Form onSubmit={submitFormHandler}>
          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label className={style.label}>Project Name</Form.Label>
            <Form.Control
              type="number"
              name="project_id"
              className={style.customInput}
              ref={focus}
              value={form.project_id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label className={style.label}>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              className={style.customInput}
              ref={focus}
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label className={style.label}>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              className={style.customInput}
              ref={focus}
              value={form.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descriptionTextarea">
            <Form.Label className={style.label}>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              className={style.customInput}
              ref={focus}
              value={form.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* <Form.Group controlId="formImageUpload">
            <Form.Label className={style.label}>
              Upload Project Image
            </Form.Label>
            <Form.Control
              multiple
              type="file"
              name="image"
              accept="image/*"
              className={style.customInput}
              ref={focus}
              value={form.image}
              onChange={handleChange}
              required
            />
          </Form.Group> */}

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
