import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ManageDonor from "./ManageDonor/ManageDonor";
import swal from "sweetalert";

const ManageDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://intense-retreat-13874.herokuapp.com/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  // delete an user
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("are you sure, you want to delete?");

    if (proceed) {
      const url = `https://intense-retreat-13874.herokuapp.com/donors/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal({
              title: "Your donor has been deleted!",
              icon: "success",
            });

            const remainingDonors = donors.filter(
              (deleteDonor) => deleteDonor._id !== id
            );
            setDonors(remainingDonors);
          }
        });
    }
  };
  return (
    <div>
      <Container>
        <h2>
          Manage All <span>Donors</span>
        </h2>
        <Row className="donors">
          {donors.map((donor) => (
            <div className="singleDonor mx-auto col-lg-4 col-md-6 col-12">
              <ManageDonor key={donor._id} donor={donor}></ManageDonor>
              <button
                onClick={() => handleDeleteUser(donor._id)}
                className="button"
                style={{ padding: "0px 13px", marginBottom: "15px" }}
              >
                Delete
              </button>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageDonors;
