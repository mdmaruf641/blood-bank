import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Register.css";

import { NavLink } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    }
    e.preventDefault();
  };
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <div className="form-container">
          <h1 className="mb-4">Sign Up</h1>

          <Form onSubmit={handleLoginSubmit}>
            <Form.Control
              name="name"
              onChange={handleOnChange}
              required
              type="text"
              placeholder="Your Name"
            />
            <br />
            <Form.Control
              name="email"
              onChange={handleOnChange}
              required
              type="email"
              placeholder="Your Email"
            />
            <br />
            <Form.Control
              name="password"
              onChange={handleOnChange}
              required
              type="password"
              placeholder="Your Password"
            />
            <br />
            <Form.Control
              name="password2"
              onChange={handleOnChange}
              required
              type="password"
              placeholder="Confirm Password"
            />
            <br />
            <Button className="button" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>

          <NavLink className="my-3 d-block text-decoration-none" to="/login">
            Already Have an Account? Please Login
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Register;
