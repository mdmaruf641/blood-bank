import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ManageDonor from "./ManageDonor/ManageDonor";

const ManageDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://intense-retreat-13874.herokuapp.com/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return (
    <div>
      <Container>
        <h2>
          Manage All <span>Donors</span>
        </h2>
        <Row className="donors">
          {donors.map((donor) => (
            <ManageDonor key={donor._id} donor={donor}></ManageDonor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageDonors;
