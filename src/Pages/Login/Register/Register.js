import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Register.css";

import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser, isLoading } = useAuth();

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
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <div className="form-container">
          <h1 className="mb-4">Sign Up</h1>

          {!isLoading && (
            <Form onSubmit={handleLoginSubmit}>
              {/* <Form.Control
              name="name"
              onChange={handleOnChange}
              required
              type="text"
              placeholder="Your Name"
            /> */}
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
          )}
          {isLoading && <Spinner animation="border" variant="danger" />}
          <NavLink className="my-3 d-block text-decoration-none" to="/login">
            Already Have an Account? Please Login
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
// 71/8
export default Register;
