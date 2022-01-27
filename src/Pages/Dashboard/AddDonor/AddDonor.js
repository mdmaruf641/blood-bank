import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import "./AddDonor.css";
import swal from "sweetalert";

const AddDonor = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
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
      <Navigation></Navigation>
      <Container>
        <form className="addDonorForm" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Donor</h2>
          <p className="m-0 text-start">Donor Name</p>
          <input
            className="donorInput mt-0 mb-3"
            placeholder="Donor Name"
            defaultValue={user.displayName}
            required
            type="text"
            {...register("Name")}
          />
          <br />
          <p className="m-0 text-start">Donor Blood Group</p>
          <input
            className="donorInput mt-0 mb-3"
            placeholder="Donor Blood Group"
            required
            type="text"
            {...register("BloodGroup")}
          />
          <br />
          <p className="m-0 text-start">Donor Phone Number</p>
          <input
            className="donorInput mt-0 mb-3"
            placeholder="Donor Phone"
            required
            type="text"
            {...register("Phone")}
          />
          <br />
          <p className="m-0 text-start">Last Donation date</p>
          <input
            className="donorInput mt-0 mb-3"
            placeholder="Last Donate Date"
            required
            type="date"
            {...register("LastDonate")}
          />
          <br />
          <input className="button" type="submit" />
        </form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AddDonor;
