import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerImg from "../../../images/banner-img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center">
          <div className="col-lg-6 text-start banner-content">
            <h5>Donate Blood & Save Life!</h5>
            <h1 className="text-uppercase">
              your <span>blood</span> can bring smile in other person face
              <span>.</span>
            </h1>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={bannerImg} alt="bannerImage" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
