import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <h2>
          Make an <span>Admin</span>
        </h2>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            onBlur={handleOnBlur}
            id="standard-basic"
            className="w-50"
            label="Email"
            variant="standard"
          />
          <br />
          <br />
          <button className="button">Make Admin</button>
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
