import React from "react";

const OurProcessSection = () => {
  return (
    <div className="section position-relative">
      <div className="r-container">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-column align-items-center gap-3">
            <div
              className="border-bottom border-4 border-accent scrollanimation animated fadeInDown adr-9 adl-2"
              style={{ width: "100px" }}
            ></div>
            <h2
              className="text-center scrollanimation animated fadeInDown adr-9"
              style={{ maxWidth: "60%" }}
            >
              Our Proven Methodology <br /> For Digital Success
            </h2>
            <div
              className="sub-heading text-accent second position-absolute"
              style={{ zIndex: -1, top: "-3%" }}
            >
              OUR PROCESS
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-5 mt-lg-5 pt-lg-5">
            <div className="row row-cols-md-3 row-cols-1 process-wrapper">
              <div className="col mb-3">
                <img
                  src="/image/aboutpage/11 (2).png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co research and strategy development"
                  width="486"
                />
              </div>
              <div className="col mb-3">
                <div className="process-icon">
                  <div className="line"></div>
                  <div className="icon-box-2">
                    <i className="rtmicon rtmicon-search"></i>
                    <div className="icon-box-3">
                      <div className="small-text">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <h3>Research & Strategy Development</h3>
                <p className="text-color-2">
                  We conduct comprehensive market analysis, competitor research,
                  and audience profiling to create a customized digital strategy
                  that aligns with your business objectives and brand identity.
                </p>
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-1 process-wrapper">
              <div className="col mb-3">
                <h3>Content Planning & Creation</h3>
                <p className="text-color-2">
                  Our creative team develops engaging content calendars,
                  high-quality visuals, compelling videos, and persuasive copy
                  that reflect your brand voice and resonate with your target
                  audience.
                </p>
              </div>
              <div className="col mb-3">
                <div className="process-icon">
                  <div className="line"></div>
                  <div className="icon-box-2">
                    <i className="rtmicon rtmicon-calendar"></i>
                    <div className="icon-box-3">
                      <div className="small-text">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <img
                  src="/image/aboutpage/12 (2).png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co content planning and creation"
                  width="486"
                />
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-1 process-wrapper">
              <div className="col mb-3">
                <img
                  src="/image/aboutpage/13 (4).png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co execution and optimization"
                  width="486"
                />
              </div>
              <div className="col mb-3">
                <div className="process-icon">
                  <div className="line"></div>
                  <div className="icon-box-2">
                    <i className="rtmicon rtmicon-gear"></i>
                    <div className="icon-box-3">
                      <div className="small-text">3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <h3>Execution & Optimization</h3>
                <p className="text-color-2">
                  We implement your campaigns across all relevant platforms,
                  manage your social media presence, and continuously optimize
                  content for maximum engagement, reach, and conversion rates.
                </p>
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-1 process-wrapper">
              <div className="col mb-3">
                <h3>Monitoring & Growth</h3>
                <p className="text-color-2">
                  We track key performance indicators, analyze audience
                  insights, and refine strategies based on data to ensure
                  sustained growth and improved ROI for your brand.
                </p>
              </div>
              <div className="col mb-3">
                <div className="process-icon">
                  <div className="line"></div>
                  <div className="icon-box-2">
                    <i className="rtmicon rtmicon-chart-line-up"></i>
                    <div className="icon-box-3">
                      <div className="small-text">4</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <img
                  src="/image/aboutpage/15.png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co monitoring and growth analytics"
                  width="486"
                />
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-1 process-wrapper">
              <div className="col mb-3">
                <img
                  src="/image/aboutpage/14 (1).png"
                  className="img-fluid"
                  alt="Yashik Yadav and Co review and scaling strategies"
                  width="486"
                />
              </div>
              <div className="col mb-3">
                <div className="process-icon">
                  <div className="line"></div>
                  <div className="icon-box-2">
                    <i className="rtmicon rtmicon-volume"></i>
                    <div className="icon-box-3">
                      <div className="small-text">5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <h3>Review & Scale</h3>
                <p className="text-color-2">
                  Through detailed performance reports and strategic insights,
                  we identify opportunities for expansion and refine your
                  campaigns to ensure long-term success and brand growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;
