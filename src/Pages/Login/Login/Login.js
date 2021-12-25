import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <div className="form-container">
          <h1 className="mb-4">Login</h1>
          <Form /* onSubmit={handleLoginSubmit} */>
            <Form.Control
              name="email"
              /* onChange={handleOnChange} */
              required
              type="email"
              placeholder="Your Email"
            />
            <br />
            <Form.Control
              name="password"
              /* onChange={handleOnChange} */
              required
              type="password"
              placeholder="Your Password"
            />
            <br />

            <Button className="button" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <NavLink className="my-3 d-block text-decoration-none" to="/register">
            New User? Please Sign Up
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Login;
