import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const DashboardAddDonor = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://intense-retreat-13874.herokuapp.com/donors", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Donor Successfully Added!",
            icon: "success",
          });
          reset();
        } else {
          swal({
            title: "Error! Donor not Added. Please try again.",
            icon: "error",
          });
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
            required
            type="text"
            {...register("Name")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Blood Group"
            required
            type="text"
            {...register("BloodGroup")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Phone"
            required
            type="text"
            {...register("Phone")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Last Donate Date"
            required
            type="date"
            {...register("LastDonate")}
          />
          <br />
          <input className="button" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default DashboardAddDonor;
