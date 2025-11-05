import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUsSection = () => {
  return (
    <div className="section">
      <div
        className="mx-auto align-items-center position-relative bg-color-2 p-xl-5 p-3 rounded-5"
        style={{ maxWidth: "1770px" }}
      >
        <div
          className="sub-heading position-absolute text-accent"
          style={{ zIndex: 1, left: "2%", top: "-1%" }}
        >
          WHY CHOOSE US
        </div>
        <div className="d-flex flex-column gap-5">
          <div
            className="d-flex flex-row align-items-center justify-content-end gap-2 position-relative"
            style={{ zIndex: 2 }}
          >
            <div
              className="border-bottom border-4 border-accent mb-5"
              style={{ width: "100px" }}
            ></div>
            <h3 className="scrollanimation animated fadeInDown adr-9">
              {/* Why Choose Us? The Right <br /> Partner for Your Growth */}
              Why Choose Yashik Yadav & CO. <br /> for SEO & Digital Growth?
            </h3>
          </div>
          <p className="fw-bold scrollanimation animated fadeInDown adr-9 adl-2">
            We're more than just a service—we're your <br /> growth partner.
            With our expertise, tailored <br />
            strategies.
          </p>
          <div className="row row-cols-xl-2 row-cols-1">
            <div
              className="col position-relative mb-3"
              style={{ minHeight: "500px" }}
            >
              <img
                className="img-fluid ms-xl-5"
                src="/image/img 14.png"
                alt="Team working on digital marketing strategies"
                style={{ aspectRatio: "2/3", width: "384px" }}
              />
              <style>
                {`
          @media (max-width: 620px) {
            .middimage {
              display: none !important;
            }
          }
        `}
              </style>
              <img
                className="img-fluid float-img middimage"
                src="/image/img 15.png"
                alt="Creative brainstorming session"
                style={{ aspectRatio: "3/2", width: "384px" }}
              />

              <button
                className="btn-play choose-us"
                type="button"
                data-bs-target="#e119"
              >
                <p className="btn-play__text">
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
                <div className="btn-play__circle bg-accent-color-4">
                  <i className="rtmicon rtmicon-play-button text-color btn-play__icon"></i>
                  <i className="rtmicon rtmicon-play-button btn-play__icon btn-play__icon--copy"></i>
                </div>
              </button>
            </div>
            <div className="col mb-3">
              <div className="d-flex flex-column" style={{ gap: "7rem" }}>
                <div className="d-flex flex-column gap-4">
                  <img
                    className="img-fluid ms-auto"
                    src="/image/icon 3.png"
                    alt="Decorative icon representing expertise"
                    width="174px"
                  />
                  <div className="r-progress w-100" style={{ "--value": 93 }}>
                    <span className="font-1 fw-semibold">
                      Expert Strategies
                    </span>
                    <div className="progress-container mt-2">
                      <div className="r-progress-bar percentage-label">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="r-progress w-100" style={{ "--value": 87 }}>
                    <span className="font-1 fw-semibold">Engaging Content</span>
                    <div className="progress-container mt-2">
                      <div className="r-progress-bar percentage-label">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="r-progress w-100" style={{ "--value": 90 }}>
                    <span className="font-1 fw-semibold">Proven Results</span>
                    <div className="progress-container mt-2">
                      <div className="r-progress-bar percentage-label">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="r-progress w-100" style={{ "--value": 98 }}>
                    <span className="font-1 fw-semibold">
                      Dedicated Support
                    </span>
                    <div className="progress-container mt-2">
                      <div className="r-progress-bar percentage-label">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="img-fluid mx-auto"
                  src="/image/icon 4.png"
                  alt="Decorative icon representing results"
                  width="369px"
                />
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-3 row-cols-1">
            <div className="col mb-3">
              <div className="d-flex flex-column align-items-center">
                <div className="text-center">
                  <span
                    className="sub-heading number"
                    data-target="20"
                    data-duration="1000"
                  >
                    0
                  </span>
                  <span className="sub-heading">+</span>
                </div>
                <hr className="hr-custom" style={{ width: "80%" }} />
                <h5 className="text-center"> International Project</h5>
              </div>
            </div>
            <div className="col mb-3">
              <div className="d-flex flex-column align-items-center">
                <div className="text-center">
                  <span
                    className="sub-heading text-center number"
                    data-target="5"
                    data-duration="1000"
                  >
                    0
                  </span>
                  <span className="sub-heading">+</span>
                </div>

                <hr className="hr-custom" style={{ width: "35%" }} />
                <h5 className="text-center">Years Experience</h5>
              </div>
            </div>
            <div className="col mb-3">
              <div className="d-flex flex-column align-items-center">
                <div className="text-center">
                  <span
                    className="sub-heading text-center number"
                    data-target="120"
                    data-duration="1000"
                  >
                    0
                  </span>
                  <span className="sub-heading">+</span>
                </div>
                <hr className="hr-custom" style={{ width: "70%" }} />
                <h5 className="text-center w-max-content">Completed Project</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="e119" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark-color">
            <iframe
              className="ifr-video"
              src="https://www.youtube.com/channel/UC3qcrtRPd8bpvV0hvm_6BnA/embed/FK2RaJ1EfA8?autoplay=1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
