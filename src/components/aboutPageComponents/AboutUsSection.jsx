import React from "react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <div className="section position-relative">
      <div className="r-container">
        <div
          className="sub-heading text-accent second position-absolute"
          style={{ zIndex: -1, top: "-5%", right: "15%" }}
        >
          ABOUT US
        </div>
        <div className="d-flex flex-column gap-3">
          <h2 className="scrollanimation animated fadeInDown adr-9">
            We Transform Brands Through <br /> Strategic Social Media Excellence
          </h2>
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-about">
            <p
              className="border-start border-3 border-accent ps-2 scrollanimation animated fadeInDown adr-9 adl-1"
              style={{ maxWidth: "50%" }}
            >
              At Yashik Yadav and Co, we specialize in elevating brands through
              innovative social media strategies and creative content marketing.
              Our expert team combines data-driven insights with artistic vision
              to help businesses establish a powerful digital presence that
              resonates with their target audience and drives measurable
              results.
            </p>
            <img
              src="/image/icon 7.png"
              className="img-fluid"
              alt="Yashik Yadav and Co brand excellence icon"
              style={{ aspectRatio: "1/1", width: "88px" }}
            />
          </div>
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col col-xl-8 mb-3">
              <div className="position-relative">
                <img
                  src="/image/aboutpage/7 (1).png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co social media strategy planning"
                  style={{ aspectRatio: "16/9" }}
                />
                <button
                  className="btn-play about-us position-absolute"
                  type="button"
                  data-bs-target="#e119"
                  style={{ bottom: "-17%", right: "18%" }}
                >
                  <p className="btn-play__text about">
                    <span style={{ "--index": 0 }}>C</span>
                    <span style={{ "--index": 1 }}>R</span>
                    <span style={{ "--index": 2 }}>E</span>
                    <span style={{ "--index": 3 }}>A</span>
                    <span style={{ "--index": 4 }}>T</span>
                    <span style={{ "--index": 5 }}>I</span>
                    <span style={{ "--index": 6 }}>V</span>
                    <span style={{ "--index": 7 }}>E</span>
                    <span style={{ "--index": 8 }}>.</span>
                    <span style={{ "--index": 9 }}> </span>
                    <span style={{ "--index": 10 }}>S</span>
                    <span style={{ "--index": 11 }}>T</span>
                    <span style={{ "--index": 12 }}>R</span>
                    <span style={{ "--index": 13 }}>A</span>
                    <span style={{ "--index": 14 }}>T</span>
                    <span style={{ "--index": 15 }}>E</span>
                    <span style={{ "--index": 16 }}>G</span>
                    <span style={{ "--index": 17 }}>I</span>
                    <span style={{ "--index": 18 }}>C</span>
                    <span style={{ "--index": 19 }}>.</span>
                    <span style={{ "--index": 20 }}> </span>
                    <span style={{ "--index": 21 }}>P</span>
                    <span style={{ "--index": 22 }}>R</span>
                    <span style={{ "--index": 23 }}>O</span>
                    <span style={{ "--index": 24 }}>F</span>
                    <span style={{ "--index": 25 }}>E</span>
                    <span style={{ "--index": 26 }}>S</span>
                    <span style={{ "--index": 27 }}>S</span>
                    <span style={{ "--index": 28 }}>I</span>
                    <span style={{ "--index": 29 }}>O</span>
                    <span style={{ "--index": 30 }}>N</span>
                    <span style={{ "--index": 31 }}>A</span>
                    <span style={{ "--index": 32 }}>L</span>
                    <span style={{ "--index": 33 }}>.</span>
                  </p>
                  <Link
                    to="/about-us"
                    className="btn-play__circle about bg-accent-color-4"
                  >
                    <i className="rtmicon rtmicon-arrow-down-right text-color btn-play__icon"></i>
                    <i className="rtmicon rtmicon-arrow-down-right btn-play__icon btn-play__icon--copy"></i>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col col-lg-4 mb-3">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="d-flex flex-column float-number">
                    <div className="d-flex flex-row align-items-center accent-color">
                      <h2
                        className="m-0 number"
                        data-target="250"
                        data-duration="1000"
                      >
                        0
                      </h2>
                      <h2 className="m-0">+</h2>
                    </div>
                    <h6>Happy Clients</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column float-number">
                    <div className="d-flex flex-row align-items-center accent-color">
                      <h2
                        className="m-0 accent-color number"
                        data-target="5"
                        data-duration="1000"
                      >
                        0
                      </h2>
                      <h2 className="m-0">+</h2>
                    </div>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column float-number">
                    <div className="d-flex flex-row align-items-center accent-color">
                      <h2
                        className="m-0 accent-color number"
                        data-target="120"
                        data-duration="1000"
                      >
                        0
                      </h2>
                      <h2 className="m-0">+</h2>
                    </div>
                    <h6>Completed Projects</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
