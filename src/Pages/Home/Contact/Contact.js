import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Contact.css";
import contact from "../../../images/contact.png";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <div className="col-lg-6 input-container">
            <h2>
              Get In <span>Touch</span>
            </h2>
            <form className="mt-3">
              <TextField
                className="contact-input"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                type="text"
              />
              <br />
              <br />
              <TextField
                className="contact-input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                type="email"
              />
              <br />
              <br />
              <TextField
                className="contact-input"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                type="text"
              />
              <br />
              <br />
              <TextField
                className="contact-input"
                id="outlined-multiline-static"
                label="Message"
                multiline
                required
                type="text"
                rows={3}
              />
              <br /> <br />
              <Button className="button">Submit</Button>
            </form>
          </div>
          <div className="col-lg-6">
            <img src={contact} className="w-100" alt="" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
