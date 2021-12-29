import React, { useState, useEffect } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import AllDonor from "../AllDonor/AllDonor";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AllDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <div className="section-head">
          <h2>
            OUR <span>DONORS</span>
          </h2>
        </div>
        <Row className="donors">
          {donors.map((donor) => (
            <AllDonor key={donor._id} donor={donor}></AllDonor>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllDonors;
