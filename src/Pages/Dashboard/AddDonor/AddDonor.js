import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddDonor.css";

const AddDonor = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/donors", data).then((res) => {
      if (res.data.insertedId) {
        alert("added Successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <Container>
        <form className="addDonorForm" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Donor</h2>
          <input
            className="donorInput"
            placeholder="Donor Name"
            type="text"
            {...register("Name")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Blood Group"
            type="text"
            {...register("BloodGroup")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Phone"
            type="text"
            {...register("Phone")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Last Donate Date"
            type="text"
            {...register("LastDonate")}
          />
          <br />
          <input className="button" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default AddDonor;
