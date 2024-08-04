import React, { useRef, useState } from "react";
import style from "./AddProductPage.module.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProductPage = () => {
  const [form , setForm] = useState({
  username : "" ,
  email : "" ,
  password : "" ,
  projectName : "" ,
  category : "" , 
  description : "" ,
  image : [null] ,
  }) ;

  const [error , setError] = useState("") ;

  const focus = useRef(null) ;
  
  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form  , [e.target.name] : e.target.value })
  };
  
  return (
    <div md={8} lg={6} xs={12} className={style.Container} expand="md">
      <div className={style.h2Title}>
        <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
          Add Your Product
        </h2>
      </div>
      <div className={style.form}>
        <Form onSubmit={changeHandler}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className={style.label}>UserName</Form.Label>
            <Form.Control
              type="text"
              name= "username"
              className={style.customInput}
              ref={focus}
              value={form.username}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={style.label}>Email address</Form.Label>
            <Form.Control
              className={style.customInput}
              type="email"
              name="email"
              ref={focus}
              value={form.email}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={style.label}>Password</Form.Label>
            <Form.Control
              className={style.customInput}
              type="password"
              name="password"
              ref={focus}
              value={form.password}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label className={style.label}>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="projectName"
              className={style.customInput}
              ref={focus}
              value={form.projectName}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoryName">
            <Form.Label className={style.label}>IProject Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              className={style.customInput}
              ref={focus}
              value={form.category}
              onChange={changeHandler}
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
              onChange={changeHandler}
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
              name="image"
              accept="image/*"
              className={style.customInput}
              ref={focus}
              value={form.image}
              onChange={changeHandler}
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
