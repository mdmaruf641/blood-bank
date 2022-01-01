import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OurDonors from "../OurDonors/OurDonors";

export const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <OurDonors></OurDonors>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
