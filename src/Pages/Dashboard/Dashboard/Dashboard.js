import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AddDonor from "../AddDonor/AddDonor";

const Dashboard = () => {
  return (
    <div>
      <Navigation></Navigation>
      <h2>This is Dashboard</h2>
      <AddDonor></AddDonor>
    </div>
  );
};

export default Dashboard;
