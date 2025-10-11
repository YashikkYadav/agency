import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="section position-relative home-section">
      <div className="r-container">
        <div
          className="sub-heading position-absolute text-accent second home-subheading"
          style={{ zIndex: -1, left: "12%", top: "-2%" }}
        >
          OUR SERVICES
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-row align-items-center justify-content-end text-xl-end gap-2">
            <div
              className="border-bottom border-4 border-accent mb-5"
              style={{ width: "100px" }}
            ></div>
            <h3 className="scrollanimation animated fadeInDown adr-9 home-services-heading">
              {/* What We Do? Boost Your <br /> Brand with Reboost */}
              {/* What We Do —<br /> For Your Business Growth */}
              What We Do — <br />
              For Your Business Growth
            </h3>
          </div>
          <div className="row row-cols-xl-2 row-cols-1 align-items-center">
            <div
              className="col col-lg-8 mb-3 home-service-image"
              style={{
                height: "160px",
                overflow: "hidden",
                backgroundSize: "cover",
                borderRadius: "10px",
              }}
            >
              <img
                className="img-fluid"
                src="/image/3.jpg"
                alt="how we work"
                width="260px"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col col-lg-4 mb-3">
              <p className="text-lg-end scrollanimation animated fadeInDown adr-9 adl-2">
                We provide digital marketing and social media services to <br />{" "}
                help your business stand out, attract the right audience.
              </p>
            </div>
          </div>
          <div className="row row-cols-1">
            <div className="col mb-3">
              <div className="d-flex flex-lg-row flex-column gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2 active">
                  Social Media Management
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Content Creation
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Influencer & Brand Collaboration
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Paid Ads & Campaign
                </span>
              </div>
              <div className="d-flex flex-lg-row flex-column gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2">
                  Brand Strategy & Growth
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Website Optimization
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Event & Campaign Promotion
                </span>
              </div>
              <div className="d-flex flex-lg-row flex-column gap-2">
                <span className="w-max-content small-text btn-accent-2">
                  Corporate & Personal Branding
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <div className="navigation">
              <h4>Branding</h4>
              <img
                src="/image/4.png"
                className="img-fluid home-portfolio-image"
                alt="brnading image"
              />
              <Link to="/services#branding">
                <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
              </Link>
            </div>
            <hr />
            <div className="navigation">
              <h4>Marketing</h4>
              <img
                src="/image/5.png"
                className="img-fluid home-portfolio-image"
                alt="marketing image"
              />
              <Link to="/services#marketing">
                <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
              </Link>
            </div>
            <hr />
            <div className="navigation">
              <h4>Development</h4>
              <img
                src="/image/6.png"
                className="img-fluid home-portfolio-image"
                alt="Development image"
              />
              <Link to="/services#development">
                <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
