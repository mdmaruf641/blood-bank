import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Alert, Container, Form, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <div className="form-container">
          <h1 className="mb-4">Login</h1>
          <Form onSubmit={handleLoginSubmit}>
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

            <Button className="button" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          {isLoading && <Spinner animation="border" variant="danger" />}
          {user?.email && (
            <Alert className="mt-2" variant="success">
              User Login Successfully!
            </Alert>
          )}
          {authError && (
            <Alert className="mt-2" variant="danger">
              {authError}
            </Alert>
          )}
          <NavLink className="my-3 d-block text-decoration-none" to="/register">
            New User? Please Sign Up
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
// 71/9
export default Login;
