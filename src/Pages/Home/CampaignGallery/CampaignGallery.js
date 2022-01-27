import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./CampaignGallery.css";
import gallery1 from "../../../images/gallery1.jpg";
import gallery2 from "../../../images/gallery2.jpg";
import gallery3 from "../../../images/gallery3.jpg";
import gallery4 from "../../../images/gallery4.jpg";
import gallery5 from "../../../images/gallery5.jpg";
import gallery6 from "../../../images/gallery6.jpg";
import { HashLink } from "react-router-hash-link";

const CampaignGallery = () => {
  return (
    <Container>
      <div className="section-head">
        <h2 className="text-uppercase fw-bold">
          Campaign <span>Gallery</span>
        </h2>
        <p className="fs-5">
          Our prestigious voluntary work on campaigns by the team
        </p>
      </div>
      <div className="gallery-img">
        <Row>
          <div className="col-lg-4 col-md-6 col-12">
            <img className="w-100 rounded" src={gallery1} alt="GalleryImage" />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img className="w-100 rounded" src={gallery2} alt="GalleryImage" />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img className="w-100 rounded" src={gallery3} alt="GalleryImage" />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              className="w-100 rounded mt-4"
              src={gallery4}
              alt="GalleryImage"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              className="w-100 rounded mt-4"
              src={gallery5}
              alt="GalleryImage"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img
              className="w-100 rounded mt-4"
              src={gallery6}
              alt="GalleryImage"
            />
          </div>
        </Row>
      </div>

      {/* Join with us part */}
      <div className="join-part">
        <h2>Become A Part Of Great Work Today</h2>
        <p>
          You can give blood at any of our blood donation venues all over the
          world. We have total sixty thousands donor centers and visit thousands
          of other venues on various occasions.{" "}
        </p>
        <button className="button mt-3 py-0 px-2">
          <Nav.Link className=" text-white" as={HashLink} to="/addDonor">
            Join With Us
          </Nav.Link>
        </button>
      </div>
    </Container>
  );
};

export default CampaignGallery;
