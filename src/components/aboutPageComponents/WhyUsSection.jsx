import React from "react";

const WhyUsSection = () => {
  return (
    <div className="section">
      <div className="r-container">
        <div className="d-flex flex-column gap-5">
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col mb-3">
              <div className="d-flex flex-column justify-content-between gap-3 h-100">
                <img
                  src="/image/icon 8.png"
                  className="img-fluid"
                  width="30%"
                  alt="Yashik Yadav and Co social media expertise"
                />
                <h2 className="fst-italic fw-normal">
                  <span className="accent-color scrollanimation animated fadeInDown adr-9">
                    The Premier
                  </span>{" "}
                  <br />
                  <span className="scrollanimation animated fadeInDown adr-9 adl-1">
                    Social Media Agency
                  </span>{" "}
                  <br />
                  <span className="text-color-2 scrollanimation animated fadeInDown adr-9 adl-2">
                    For Your Brand's{" "}
                  </span>{" "}
                  <br />
                  <span className="text-color-2 fw-bold scrollanimation animated fadeInDown adr-9 adl-3">
                    Digital Transformation
                  </span>
                </h2>
                <p
                  className="scrollanimation animated fadeInDown adr-9 adl-3"
                  style={{ maxWidth: "85%" }}
                >
                  With our expert team, data-driven strategies, and creative
                  approach, we help businesses grow their online presence and
                  achieve measurable ROI through innovative social media
                  solutions.
                </p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="position-relative">
                <img
                  src="/image/aboutpage/5.png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co helping customers achieve digital success"
                  style={{
                    aspectRatio: "5/6",
                    boxShadow: "20px 20px 0px -8px #C9F22C",
                  }}
                />
                <div className="card-customer">
                  <div className="position-relative">
                    <div className="customer-container">
                      <div className="customer-item">
                        <img
                          src="/image/aboutpage/reviewer 1.webp"
                          className="img-fluid"
                          alt="Satisfied customer"
                        />
                      </div>
                      <div className="customer-item">
                        <img
                          src="/image/aboutpage/reviewer 2.webp"
                          className="img-fluid"
                          alt="Satisfied customer"
                        />
                      </div>
                      <div className="customer-item">
                        <img
                          src="/image/aboutpage/reviewer 3.webp"
                          className="img-fluid"
                          alt="Satisfied customer"
                        />
                      </div>
                      <div className="customer-add">
                        <a href="">
                          <i className="rtmicon rtmicon-pluss accent-color"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column scrollanimation animated zoomIn adr-9 adl-2">
                    <h6 className="background-color">4.9 Star</h6>
                    <span className="small-text background-color">
                      Client Satisfaction Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion d-flex flex-column gap-4"
            id="faqAccordion1"
          >
            <div className="accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  - What makes Yashik Yadav and Co different from other
                  agencies?
                </button>
              </div>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion1"
              >
                <div className="accordion-body">
                  We combine creativity with data-driven strategies to ensure
                  maximum engagement and brand growth. Our team of experts
                  carefully analyzes trends, audience behavior, and performance
                  metrics to craft highly effective campaigns. Plus, we provide
                  personalized strategies that align with your unique business
                  goals and brand identity.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  - Do you require long-term contracts?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion1"
              >
                <div className="accordion-body">
                  We believe in earning your trust through results, not lengthy
                  commitments. While we recommend our comprehensive packages for
                  maximum impact, we offer flexible engagement options to suit
                  your business needs and budget. Our goal is to build long-term
                  partnerships based on mutual success.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  - When can I expect to see results from your services?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion1"
              >
                <div className="accordion-body">
                  While social media growth is a continuous process, most
                  clients begin seeing increased engagement within the first 30
                  days. Significant growth in followers, website traffic, and
                  conversions typically occurs within 60-90 days. We provide
                  monthly reports to track your progress and adjust strategies
                  for optimal performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
