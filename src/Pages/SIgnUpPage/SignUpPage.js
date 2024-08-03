import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import style from "./SIgnUpPage.module.css";
import axios from "axios";
import { baseURL, SignUp } from "../../API/Api";

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    user_name: "",
    email: "",
    image: null,
    address: "",
    phone_number: "",
    password: "",
    type: "",
    // birth_date: "",
  });

  // const [error, setError] = useState("");

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
    axios
      .post("http://127.0.0.1:8000/api/user", form)
      .then((response) => {
        console.log("form is ", form, "response is: ", response);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
    // try {
    //   const res = await axios.post(`http://127.0.0.1:8000/api/signup`, form);
    //   console.log(res);
    // } catch (err) {
    // console.log(err);
    // if (err.response.status === 404) {
    //   setError("Email is already been token");
    // } else {
    //   setError("Internal Server Err");
    // }
    //   if (err.response) {
    //     let status = err.response.status;
    //     console.log("status", status);
    //   } else {
    //     console.error("Error:", err.message);
    //   }
    // }
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

        {/* <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Birth Date</Form.Label>
          <Form.Control
            type="Date"
            name="birth_date"
            className={style.formControl}
            placeholder="Enter Your Date"
            ref={focus}
            value={form.birth_date}
            onChange={handleChange}
          />
        </Form.Group> */}

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className={style.divBtn}>
          <Button className={style.btn} type="submit">
            Create Account
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
