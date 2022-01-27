import React, { useState, useEffect } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import OurDonor from "../OurDonor/OurDonor";
import "./OurDonors.css";

const OurDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://intense-retreat-13874.herokuapp.com/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="section-head">
          <h2 className="text-uppercase fw-bold">
            OUR <span>DONORS</span>
          </h2>
        </div>
        <Row className="donors">
          {donors.slice(0, 9).map((donor) => (
            <OurDonor key={donor._id} donor={donor}></OurDonor>
          ))}
        </Row>
        <button className="button py-0 px-2">
          <Nav.Link className=" text-white" as={HashLink} to="/allDonors">
            View All
          </Nav.Link>
        </button>
      </Container>
    </div>
  );
};

export default OurDonors;
