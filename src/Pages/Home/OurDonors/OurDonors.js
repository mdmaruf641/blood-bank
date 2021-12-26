import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./OurDonors.css";

const OurDonors = () => {
  return (
    <div>
      <div className="section-head">
        <h2>
          OUR <span>DONORS</span>
        </h2>
      </div>
      <button className="button py-0 px-2">
        <Nav.Link className=" text-white" as={HashLink} to="/allDonors">
          View All
        </Nav.Link>
      </button>
    </div>
  );
};

export default OurDonors;
