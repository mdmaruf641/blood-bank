import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal({
            title: "Made Admin Successfully!",
            icon: "success",
          });
        } else {
          swal({
            title: "Error! Admin not created. Please try again.",
            icon: "error",
          });
        }
      });
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
