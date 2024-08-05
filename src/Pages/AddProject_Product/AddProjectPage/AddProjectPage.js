import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Card, Form } from "react-bootstrap";
import style from "./AddProjectPage.module.css";
import { Link } from "react-router-dom";

const AddProjectPage = () => {
  const [form, setForm] = useState({
    name: "",
    category_id: "",
    description: "",
    image: "",
    owner_id: "",
  });

  const focus = useRef(null);

  const categories = ["Pottery", "SkinCare", "FontArt", "Accessories"];
  // const categories = [1, 2, 3, 4];

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    focus.current.focus();
  }, []);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/project", form)
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
    <div>
      <div className={style.Container} expand="md">
        <div className={style.formRow}>
          <div md={8} lg={6} xs={12} className={style.formCol}>
            <div className={style.card}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
                    Add Your Project
                  </h2>
                  <div>
                    <Form onSubmit={submitFormHandler} className={style.form}>
                      <Form.Group className="mb-3" controlId="projectName">
                        <Form.Label className={style.label}>
                          Project Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          className={style.customInput}
                          ref={focus}
                          value={form.projectName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="projectName">
                        <Form.Label className={style.label}>
                          Owner Name
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="owner_id"
                          className={style.customInput}
                          ref={focus}
                          value={form.owner_id}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="category">
                        <Form.Label className={style.label}>
                          Category
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="category_id"
                          className={style.customInput}
                          value={form.category}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Your Project's Category
                          </option>
                          {categories.map((cate, index) => (
                            <option key={index} value={index}>
                              {cate}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="descriptionTextarea"
                      >
                        <Form.Label className={style.label}>
                          Project Description
                        </Form.Label>
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

                      <Form.Group controlId="formImageUpload">
                        <Form.Label className={style.label}>
                          Upload Project Image
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="image"
                          accept="image/*"
                          className={style.customInput}
                          ref={focus}
                          value={form.image}
                          onChange={handleChange}
                          // required
                        />
                      </Form.Group>
                      <div className={style.divBtn}>
                        <button className={style.projBtn} type="submit">
                          Add Project
                        </button>
                        <div className={style.linkContainer}>
                          <p>Already have a project? </p>
                          <Link to="/AddProduct">
                            <button className={style.projBtn} type="submit">
                              Next Page
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectPage;
