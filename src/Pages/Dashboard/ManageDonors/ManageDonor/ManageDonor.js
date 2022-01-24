import React from "react";

const ManageDonor = ({ donor }) => {
  const { Name, BloodGroup, Phone, LastDonate } = donor;

  return (
    <>
      <h3>{Name}</h3>
      <h5>
        Blood Group: <span>{BloodGroup}</span>
      </h5>
      <a className="" href="tel:{Phone}">
        <h4>Call: {Phone}</h4>
      </a>
      <h5>Last Donate: {LastDonate}</h5>
    </>
  );
};

export default ManageDonor;
