import React from "react";

const ServicesDetailSection = () => {
  return (
    <>
      {/* Services Detail */}
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 gap-5">
            <div className="col col-xl-7 mb-3">
              <div className="d-flex flex-column gap-3">
                <div className="position-relative">
                  <img
                    src="/image/aboutpage/6.png"
                    className="img-fluid"
                    alt="Yashik Yadav and Co advanced hashtag and trend analysis service"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <button
                    type="button"
                    className="request-loader"
                    data-bs-target="#e119"
                  >
                    <i
                      className="rtmicon rtmicon-play ms-1"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
                <h4 className="scrollanimation animated fadeInDown adr-9 adl-2">
                  Advanced Hashtag & Trend Analysis
                </h4>
                <p>
                  In today's competitive digital environment, discoverability is
                  essential for maximizing audience engagement and reach. Our
                  Advanced Hashtag & Trend Analysis service uncovers viral
                  content trends, niche-specific hashtags, and trending topics
                  to ensure your posts resonate with your target audience. Using
                  cutting-edge analytics, we position your brand ahead of
                  industry competitors.
                </p>
                <p className="fst-italic border-start border-3 border-accent ps-2 ms-5">
                  "Maximize your discoverability with research-backed hashtags
                  and trending topics that keep your brand in the spotlight!"
                </p>
                <p className="m-0">
                  We conduct in-depth analysis to identify the most impactful
                  hashtags for your niche market. Instead of relying on generic
                  or saturated tags, we utilize research-driven techniques to
                  boost visibility and audience discovery. This targeted
                  approach helps your content surface in relevant searches and
                  trending discussions, generating organic growth.
                </p>
                <hr className="text-color-2" />
                <h5 className="scrollanimation animated fadeInDown adr-9">
                  Core Advantages of Hashtag & Trend Analysis:
                </h5>
                <div className="d-flex flex-row gap-3">
                  <p style={{ maxWidth: "55%" }}>
                    Trends shift rapidly, and timing is essential. Our
                    specialists monitor digital platforms constantly to identify
                    emerging patterns that match your brand identity. Whether
                    it's a viral sensation, market developments, or seasonal
                    patterns, we help you leverage optimal opportunities.
                  </p>
                  <div className="d-flex flex-column gap-1">
                    <div className="category">
                      <i className="rtmicon rtmicon-arrow-up-right accent-color"></i>
                      <a href="/services-detail" className="button text-color">
                        Boosted Discoverability
                      </a>
                    </div>
                    <div className="category">
                      <i className="rtmicon rtmicon-arrow-up-right accent-color"></i>
                      <a href="/services-detail" className="button text-color">
                        Research-Driven Hashtags
                      </a>
                    </div>
                    <div className="category">
                      <i className="rtmicon rtmicon-arrow-up-right accent-color"></i>
                      <a href="/services-detail" className="button text-color">
                        Real-Time Trend Tracking
                      </a>
                    </div>
                    <div className="category">
                      <i className="rtmicon rtmicon-arrow-up-right accent-color"></i>
                      <a href="/services-detail" className="button text-color">
                        Higher Interaction Rates
                      </a>
                    </div>
                  </div>
                </div>
                <p className="m-0">
                  With our proficiency, you won't need to guess which hashtags
                  and trends produce outcomes. We deliver comprehensive
                  analytics and performance insights, ensuring your content
                  approach adapts to evolving algorithms and audience
                  preferences. Our mission is to establish your brand as a
                  leader in the digital space.
                </p>
                <hr className="text-color-2" />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <p>Share Via:</p>
                <div className="social-icons row">
                  <a
                    href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL"
                    aria-label="Share on Facebook"
                  >
                    <i className="rtmicon rtmicon-social-share"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                    aria-label="Share on Instagram"
                  >
                    <i className="rtmicon rtmicon-social-advertising"></i>
                  </a>
                  <a
                    href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09"
                    aria-label="Share on Twitter"
                  >
                    <i className="rtmicon rtmicon-social-share"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC3qcrtRPd8bpvV0hvm_6BnA"
                    aria-label="Share on YouTube"
                  >
                    <i className="rtmicon rtmicon-social-advertising"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 mb-3">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-4">
                  <h4 className="fw-normal scrollanimation animated fadeInDown adr-9">
                    Related Services
                  </h4>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Content Development & Planning
                    </Link>
                  </div>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Advanced Hashtag & Trend Analysis
                    </Link>
                  </div>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Audience Interaction
                    </Link>
                  </div>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Growth Analytics
                    </Link>
                  </div>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Cross-Platform Management
                    </Link>
                  </div>
                  <div className="category">
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to="/services-detail" className="button text-color">
                      Content Strategy & Refinement
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <h4 className="scrollanimation animated fadeInDown adr-9 adl-1">
                    Require Professional Support?
                  </h4>
                  <p style={{ maxWidth: "80%" }}>
                    Have inquiries about our offerings? Our specialists are
                    prepared to support you. Reach out to us for expert
                    consultation and guidance.
                  </p>
                  <div className="w-max-content">
                    <a
                      className="btn btn-accent d-flex flex-row gap-3"
                      href="/contact-us"
                    >
                      <span>Connect With Our Team</span>
                    </a>
                  </div>
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
      {/* End Services Detail */}
    </>
  );
};

export default ServicesDetailSection;
