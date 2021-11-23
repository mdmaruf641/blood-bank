import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import OurDonors from "../OurDonors/OurDonors";

export const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <OurDonors></OurDonors>
      <Footer></Footer>
    </div>
  );
};
