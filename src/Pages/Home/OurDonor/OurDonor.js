import React from "react";
import "./OurDonor.css";

const OurDonor = ({ donor }) => {
  const { Name, BloodGroup, Phone, LastDonate } = donor;
  return (
    <div className="singleDonor mx-auto col-lg-4 col-md-6 col-12">
      <h3>{Name}</h3>
      <h5>
        Blood Group: <span>{BloodGroup}</span>
      </h5>
      <a className="" href="tel:{Phone}">
        <h4>Call: {Phone}</h4>
      </a>
      <h5>Last Donate: {LastDonate}</h5>
    </div>
  );
};

export default OurDonor;
