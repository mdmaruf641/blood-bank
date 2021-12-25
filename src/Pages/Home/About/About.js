import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import about from "../../../images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const check = <FontAwesomeIcon icon={faCheckCircle} />;
  return (
    <div>
      <Container>
        <div className="my-4">
          <Row>
            <div className="col-lg-6">
              <img src={about} className="w-75" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="">
                <h2 className="text-uppercase text-start fw-bold">
                  Who <span>We Are</span>
                </h2>
              </div>
              <div className="about-details">
                <div className="details-head text-start">
                  <p>
                    Blood Buddies is for public donation center with blood
                    donation members in the changing health care system.
                  </p>
                  <Row>
                    <div className="col-1 fs-5 about-icon">
                      <p>{check}</p>
                    </div>
                    <div className="col-11 text-start">
                      <p className="p-0 ">
                        Specialist blood donors and clinical supervision.
                      </p>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-1 fs-5 about-icon">
                      <p>{check}</p>
                    </div>
                    <div className="col-11 text-start">
                      <p>Increasing communication with our members.</p>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-1 fs-5 about-icon">
                      <p>{check}</p>
                    </div>
                    <div className="col-11 text-start">
                      <p>High quality assessment, diagnosis and treatment.</p>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-1 fs-5 about-icon">
                      <p>{check}</p>
                    </div>
                    <div className="col-11 text-start">
                      <p>Examine critically to ensure alignment.</p>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-1 fs-5 about-icon">
                      <p>{check}</p>
                    </div>
                    <div className="col-11 text-start">
                      <p>The extra care of a multi-disciplinary team.</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
