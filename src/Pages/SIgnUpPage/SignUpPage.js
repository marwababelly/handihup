import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import style from "./SIgnUpPage.module.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const usernameRef = useRef();
  const fullNameRef = useRef();
  const birthDateRef = useRef();
  const emailRef = useRef();
  const imageRef = useRef("");
  const addressRef = useRef();
  const phoneNumberRef = useRef("");
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const userTypeRef = useRef("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const fullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const birthDateHandler = (event) => {
    setBirthDate(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const imageHandler = (event) => {
    setImage(event.target.value);
  };

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const userTypeHandler = (event) => {
    setUserType(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredFullName = fullNameRef.current.value;
    const enteredBirthDate = birthDateRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPhoneNumber = phoneNumberRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
    const enteredUserType = userTypeRef.current.value;

    const SignUpFormData = {
      username: enteredUsername,
      fullName: enteredFullName,
      birthDate: enteredBirthDate,
      email: enteredEmail,
      address: enteredAddress,
      phoneNumber: enteredPhoneNumber,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      userType: enteredUserType,
    };
  };

  return (
    <div className={style.container}>
      <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
        Sign Up
      </h2>
      <Form onSubmit={submitFormHandler} className={style.form}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            className={style.formControl}
            required
            ref={usernameRef}
            value={username}
            onChange={usernameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            className={style.formControl}
            required
            ref={fullNameRef}
            value={fullName}
            onChange={fullNameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Birth Date</Form.Label>
          <Form.Control
            type="Date"
            className={style.formControl}
            placeholder="Enter Your Date"
            ref={birthDateRef}
            value={birthDate}
            onChange={birthDateHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={style.formControl}
            required
            ref={emailRef}
            value={email}
            onChange={emailHandler}
          />
        </Form.Group>
        <Form.Group controlId="formImageUpload">
          <Form.Label className={style.label}>Upload Your Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            className={style.customInput}
            ref={imageRef}
            value={image}
            onChange={imageHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Address"
            className={style.formControl}
            required
            ref={addressRef}
            value={address}
            onChange={addressHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your Number"
            className={style.formControl}
            required
            ref={phoneNumberRef}
            value={phoneNumber}
            onChange={phoneNumberHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className={style.formControl}
            required
            ref={passwordRef}
            value={password}
            onChange={passwordHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className={style.formControl}
            required
            ref={confirmPasswordRef}
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Type"
            className={style.formControl}
            ref={userTypeRef}
            value={userType}
            onChange={userTypeHandler}
          />
        </Form.Group> */}
        <Form.Group>
          <Form.Label>User Type</Form.Label>
          <Form.Select
            aria-label=" "
            className={style.formControl}
            ref={userTypeRef}
            value={userType}
            onChange={userTypeHandler}
          >
            <option value="1" className={style.op}>
              Customer
            </option>
            <option value="2">Owner</option>
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
