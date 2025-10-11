import React from "react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../../assets/data/portfolioItems";

const PortfolioSection = () => {
  // Function to convert title to URL-friendly format
  const formatTitleForUrl = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="section position-relative home-section">
      <div className="r-container">
        <div
          className="sub-heading position-absolute text-accent second home-subheading"
          style={{ zIndex: -1, right: "10%", top: "-2%" }}
        >
          PORTFOLIO
        </div>
        <div className="d-flex flex-column gap-5">
          <div className="row row-lg-cols-2 row-cols-1">
            <div className="col col-lg-7 mb-3">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-row align-items-center gap-2">
                  <div
                    className="border-bottom border-4 border-accent mb-5"
                    style={{ width: "100px" }}
                  ></div>
                  <h3 className="scrollanimation animated fadeInDown adr-9">
                    Success Stories That Inspire Growth
                  </h3>
                </div>
                <p
                  className="ms-xl-5 ps-xl-5 scrollanimation animated fadeInDown adr-9 adl-2"
                  style={{ maxWidth: "73%" }}
                >
                  Discover how our social media management strategies have
                  driven real results for brands worldwide.
                </p>
              </div>
            </div>
            <div className="col col-lg-5 mb-3">
              <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2 active">
                  Social Media Management
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Content Creation
                </span>
              </div>
              <div className="d-flex flex-xl-row flex-column justify-content-xl-end gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2">
                  Influencer & Brand Collaboration
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Paid Ads & Campaign
                </span>
              </div>
              <div className="d-flex flex-xl-row flex-column justify-content-xl-end gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2">
                  Brand Strategy & Growth
                </span>
                <span className="w-max-content small-text btn-accent-2">
                  Website Optimization
                </span>
              </div>
              <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2 mb-2">
                <span className="w-max-content small-text btn-accent-2">
                  Event & Campaign Promotion
                </span>
              </div>
              <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2">
                <span className="w-max-content small-text btn-accent-2">
                  Corporate & Personal Branding
                </span>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-1">
            <div className="col mb-3">
              <div className="d-flex flex-column gap-3">
                <div className="card">
                  <img
                    src={portfolioItems[0]?.image || "/image/7.png"}
                    alt={portfolioItems[0]?.title || "Portfolio item"}
                    style={{ objectFit: "cover", aspectRatio: "1/1" }}
                    className="home-portfolio-image"
                  />
                  <div className="image-overlay active">
                    <div className="d-flex flex-column gap-5">
                      <div className="d-flex flex-row gap-5">
                        <span className="p-0 text-color">
                          {portfolioItems[0]?.year || "2025"}
                        </span>
                        <span className="p-0 text-color">
                          {portfolioItems[0]?.category || "Category"}
                        </span>
                      </div>
                      <h4 style={{ maxWidth: "60%" }}>
                        {portfolioItems[0]?.title || "Project Title"}
                      </h4>
                    </div>
                    <div className="d-flex flex-lg-row flex-column gap-3 align-items-start justify-content-between">
                      <p style={{ maxWidth: "60%" }}>
                        {portfolioItems[0]?.result ||
                          "Project result description"}
                      </p>
                      <Link
                        to={`/portfolio-detail/${formatTitleForUrl(
                          portfolioItems[0]?.title || "project"
                        )}`}
                        className="icon-box-4"
                      >
                        <i className="rtmicon rtmicon-arrow-up-right fw-bold background-color"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="img-fluid home-portfolio-image"
                    src={portfolioItems[4]?.image || "/image/11.png"}
                    alt={portfolioItems[4]?.title || "Portfolio item"}
                    style={{ aspectRatio: "4/3" }}
                  />
                  <div className="image-overlay">
                    <div className="d-flex flex-column gap-5">
                      <div className="d-flex flex-row gap-5">
                        <span className="p-0 text-color">
                          {portfolioItems[4]?.year || "2025"}
                        </span>
                        <span className="p-0 text-color">
                          {portfolioItems[4]?.category || "Category"}
                        </span>
                      </div>
                      <h4 style={{ maxWidth: "70%" }}>
                        {portfolioItems[4]?.title || "Project Title"}
                      </h4>
                    </div>
                    <div className="d-flex flex-lg-row flex-column gap-3 align-items-start justify-content-between">
                      <p style={{ maxWidth: "60%" }}>
                        {portfolioItems[4]?.result ||
                          "Project result description"}
                      </p>
                      <Link
                        to={`/portfolio-detail/${formatTitleForUrl(
                          portfolioItems[4]?.title || "project"
                        )}`}
                        className="icon-box-4"
                      >
                        <i className="rtmicon rtmicon-arrow-up-right fw-bold background-color"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card h-100">
                <img
                  className="img-fluid h-100 home-portfolio-image"
                  src={portfolioItems[1]?.image || "/image/shadmani.png"}
                  alt={portfolioItems[1]?.title || "Portfolio item"}
                />
                <div className="image-overlay">
                  <div className="d-flex flex-column gap-5">
                    <div className="d-flex flex-row gap-5">
                      <span className="p-0 text-color">
                        {portfolioItems[1]?.year || "2025"}
                      </span>
                      <span className="p-0 text-color">
                        {portfolioItems[1]?.category || "Category"}
                      </span>
                    </div>
                    <h4 style={{ maxWidth: "75%" }}>
                      {portfolioItems[1]?.title || "Project Title"}
                    </h4>
                  </div>
                  <div className="d-flex flex-lg-row flex-column gap-3 align-items-start justify-content-between">
                    <p style={{ maxWidth: "60%" }}>
                      {portfolioItems[1]?.result ||
                        "Project result description"}
                    </p>
                    <Link
                      to={`/portfolio-detail/${formatTitleForUrl(
                        portfolioItems[1]?.title || "project"
                      )}`}
                      className="icon-box-4"
                    >
                      <i className="rtmicon rtmicon-arrow-up-right fw-bold background-color"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="d-flex flex-column gap-3">
                <div className="card">
                  <img
                    className="img-fluid home-portfolio-image"
                    src={portfolioItems[2]?.image || "/image/9.png"}
                    alt={portfolioItems[2]?.title || "Portfolio item"}
                    style={{ aspectRatio: "4/3" }}
                  />
                  <div className="image-overlay">
                    <div className="d-flex flex-column gap-5">
                      <div className="d-flex flex-row gap-5">
                        <span className="p-0 text-color">
                          {portfolioItems[2]?.year || "2025"}
                        </span>
                        <span className="p-0 text-color">
                          {portfolioItems[2]?.category || "Category"}
                        </span>
                      </div>
                      <h4 style={{ maxWidth: "60%" }}>
                        {portfolioItems[2]?.title || "Project Title"}
                      </h4>
                    </div>
                    <div className="d-flex flex-lg-row flex-column gap-3 align-items-start justify-content-between">
                      <p style={{ maxWidth: "60%" }}>
                        {portfolioItems[2]?.result ||
                          "Project result description"}
                      </p>
                      <Link
                        to={`/portfolio-detail/${formatTitleForUrl(
                          portfolioItems[2]?.title || "project"
                        )}`}
                        className="icon-box-4"
                      >
                        <i className="rtmicon rtmicon-arrow-up-right fw-bold background-color"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="img-fluid home-portfolio-image"
                    src={portfolioItems[3]?.image || "/image/10.png"}
                    alt={portfolioItems[3]?.title || "Portfolio item"}
                    style={{ aspectRatio: "1/1" }}
                  />
                  <div className="image-overlay">
                    <div className="d-flex flex-column gap-5">
                      <div className="d-flex flex-row gap-5">
                        <span className="p-0 text-color">
                          {portfolioItems[3]?.year || "2025"}
                        </span>
                        <span className="p-0 text-color">
                          {portfolioItems[3]?.category || "Category"}
                        </span>
                      </div>
                      <h4 style={{ maxWidth: "60%" }}>
                        {portfolioItems[3]?.title || "Project Title"}
                      </h4>
                    </div>
                    <div className="d-flex flex-lg-row flex-column gap-3 align-items-start justify-content-between">
                      <p style={{ maxWidth: "60%" }}>
                        {portfolioItems[3]?.result ||
                          "Project result description"}
                      </p>
                      <Link
                        to={`/portfolio-detail/${formatTitleForUrl(
                          portfolioItems[3]?.title || "project"
                        )}`}
                        className="icon-box-4"
                      >
                        <i className="rtmicon rtmicon-arrow-up-right fw-bold background-color"></i>
                      </Link>
                    </div>
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

export default PortfolioSection;
