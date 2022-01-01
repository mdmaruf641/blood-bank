import React from "react";

const ManageDonor = ({ donor }) => {
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
      <button
        className="button"
        style={{ padding: "0px 13px", marginBottom: "15px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default ManageDonor;
