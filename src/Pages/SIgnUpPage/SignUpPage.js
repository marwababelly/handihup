import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import style from "./SIgnUpPage.module.css";
import axios from "axios";
import { baseURL, SignUp } from "../../API/Api";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import apiClient from "../../API/axios";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { updateUser, isAuthenticated , state } = useAuth();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!state.isAuthenticated) {
      setForm({
        name: "" ,
        user_name: "" ,
        image: "" ,
        address: "" ,
        phone_number: "" ,
        type: "" ,
        password: "",
        email: "",
      });
    }
  }, [state.isAuthenticated]);
  const [form, setForm] = useState({
    name: "",
    user_name: "",
    email: "",
    image: null,
    address: "",
    phone_number: "",
    password: "",
    type: "",
  });

  const focus = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    focus.current.focus();
  }, []);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await apiClient.post("http://127.0.0.1:8000/api/user", form,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        localStorage.setItem("token", token);
        console.log("form is ", form, "response is: ", response, 'token is ', token);
        const userRole = response.data.user.type;
        localStorage.setItem("userRole",userRole);
        updateUser({...response.data, type: userRole });
        navigate('/');
      })
  
    } catch (error) {
      console.log("error is ", error);
      if (error.response && error.response.data.message === "The email has already been taken. (and 1 more error)") {
        setErrorMessage("The email, username, or phone number has already been used.");
      } 
    }
    setForm("");
  };
  
  console.log(form);

  return (
    <div className={style.container}>
      <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
        Sign Up
      </h2>
      <Form onSubmit={submitFormHandler} className={style.form}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            className={style.formControl}
            required
            ref={focus}
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">UserName</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Enter UserName"
            className={style.formControl}
            required
            ref={focus}
            value={form.user_name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            className={style.formControl}
            required
            ref={focus}
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formImageUpload">
          <Form.Label className={style.label}>Upload Your Image</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter Your Address"
            className={style.formControl}
            required
            ref={focus}
            value={form.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone_number"
            placeholder="Enter Your Number"
            className={style.formControl}
            required
            ref={focus}
            value={form.phone_number}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className={style.formControl}
            required
            ref={focus}
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>User Type</Form.Label>
          <Form.Select
            aria-label=" "
            name="type"
            className={style.formControl}
            ref={focus}
            value={form.type}
            onChange={handleChange}
          >
            <option value="user" className={style.op}>
              Customer
            </option>
            <option value="owner">Owner</option>
          </Form.Select>
        </Form.Group>
        {/* {form.type === "owner" && (
          <>
            <Form.Group className="mb-3" controlId="instagramUrl">
              <Form.Label>Instagram URL</Form.Label>
              <Form.Control
                type="url"
                name="instagramUrl"
                placeholder="Enter Instagram URL"
                className={style.formControl}
                required
                ref={focus}
                value={form.instagramUrl}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="facebookUrl">
              <Form.Label>Facebook URL</Form.Label>
              <Form.Control
                type="url"
                name="facebookUrl"
                placeholder="Enter Facebook URL"
                className={style.formControl}
                required
                ref={focus}
                value={form.facebookUrl}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="linkedinUrl">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                name="linkedinUrl"
                placeholder="Enter LinkedIn URL"
                className={style.formControl}
                required
                ref={focus}
                value={form.linkedinUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )} */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className={style.divBtn}>
          <Button className={style.btn} type="submit">
            Create Account
          </Button>
        </div>
        {errorMessage && (
           <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
                </div>
)}

      </Form>
    </div>
  );
};

export default SignUpPage;
