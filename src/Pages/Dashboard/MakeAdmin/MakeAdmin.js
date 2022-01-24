import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../Hooks/UseAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    fetch("https://intense-retreat-13874.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
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

  // 73-8
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
