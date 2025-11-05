import React from "react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../../assets/data/portfolioItems";

const PortfolioDetailSection = ({ portfolioItem }) => {
  // Get related projects (excluding the current one)
  const relatedProjects = portfolioItems
    .filter((item) => item.id !== portfolioItem?.id)
    .slice(0, 5)
    .map((item) => ({
      id: item.id,
      title: `${item.title} (${item.year})`,
      link: `/portfolio-detail/${item.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    }));

  // Use default content if no portfolio item is provided
  const title = portfolioItem?.title || "Vision-Tech Solutions";
  const category = portfolioItem?.category || "Performance Analytics";
  const description =
    portfolioItem?.description ||
    "In 2025, Vision-Tech Solutions partnered with us to enhance its digital presence and optimize its performance across various online platforms. The company sought to leverage data-driven insights to refine its marketing strategies, improve engagement rates, and drive more traffic to its website. Through our Performance Analytics service, we conducted in-depth data analysis, monitored key metrics, and implemented strategic improvements that led to substantial growth in user interaction and conversions.";
  const result =
    portfolioItem?.result ||
    "Over six months, our data-backed strategies resulted in a 250% increase in engagement rates and a 120% boost in website traffic. By identifying user behavior patterns and optimizing content based on real-time analytics, Vision-Tech Solutions was able to improve audience retention and maximize campaign effectiveness. The insights provided through our performance tracking enabled the company to make informed decisions, enhancing its overall digital marketing success.";
  const image = portfolioItem?.image || "image/aboutpage/1.png";
  const service = portfolioItem?.service || "Performance Analytics";

  const keyFeatures = [
    "Increased Visibility",
    "Data-Driven Hashtags",
    "Real-Time Trend Monitoring",
    "Higher Engagement",
  ];

  return (
    <div className="section">
      <div className="r-container">
        <div className="row row-cols-xl-2 row-cols-1 gap-5">
          <div className="col col-xl-7 mb-3">
            <div className="d-flex flex-column gap-3">
              <div className="position-relative">
                <img
                  src={image}
                  className="img-fluid"
                  alt={`${title} project overview`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: "16/9",
                  }}
                />

                {/* <button type="button" className="request-loader"  data-bs-target="#e119">
                  <i className="rtmicon rtmicon-play ms-1" aria-hidden="true"></i>
                </button> */}
              </div>
              <h5 className="scrollanimation animated fadeInDown adr-9">
                Project Overview
              </h5>
              <p>{description}</p>
              <h5 className="scrollanimation animated fadeInDown adr-9">
                Project & Impact
              </h5>
              <p className="m-0">{result}</p>
              <hr className="text-color-2" />
              <div className="row row-cols-lg-2 row-cols-1">
                <div className="col mb-3">
                  <img
                    src="/image/aboutpage/4.png"
                    className="img-fluid"
                    alt="Key features of project"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-3">
                    <h5 className="scrollanimation animated fadeInDown adr-9">
                      Key Features
                    </h5>
                    {keyFeatures.map((feature, index) => (
                      <div className="category" key={index}>
                        <i className="rtmicon rtmicon-check accent-color"></i>
                        <Link to="/about-us" className="button text-color">
                          {feature}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h5 className="scrollanimation animated fadeInDown adr-9">
                Final Results & Takeaways
              </h5>
              <p className="m-0">
                The collaboration with {title} showcased the power of
                data-driven marketing. With a well-structured approach to{" "}
                {service}, the company gained valuable insights that translated
                into higher audience engagement, increased brand visibility, and
                more conversions. This project highlights how businesses can
                maximize their digital potential by making informed, strategic
                decisions based on real-time data.
              </p>
              <hr className="text-color-2" />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <p>Share On:</p>
              <div className="social-icons row">
                <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                  <i className="rtmicon rtmicon-social-share"></i>
                </a>
                <a href="https://www.instagram.com/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                  <i className="rtmicon rtmicon-social-advertising"></i>
                </a>
                <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                  <i className="rtmicon rtmicon-social-share"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC3qcrtRPd8bpvV0hvm_6BnA">
                  <i className="rtmicon rtmicon-social-advertising"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-xl-4 mb-3">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-4">
                <h4 className="fw-normal scrollanimation animated fadeInDown adr-9">
                  Related Project
                </h4>
                {relatedProjects.map((project) => (
                  <div className="category" key={project.id}>
                    <i className="rtmicon rtmicon-arrow-up-right"></i>
                    <Link to={project.link} className="button text-color">
                      {project.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-column gap-4">
                <h4 className="scrollanimation animated fadeInDown adr-9 adl-1">
                  Let's Elevate Your Digital Presence!
                </h4>
                <p
                  className="scrollanimation animated fadeInDown adr-9 adl-2"
                  style={{ maxWidth: "80%" }}
                >
                  Looking to boost engagement, traffic, and brand awareness like
                  our previous projects? Our team is ready to work.
                </p>
                <div className="w-max-content">
                  <Link
                    className="btn btn-accent d-flex flex-row gap-3"
                    to="/contact-us"
                  >
                    <span>Get a Free Consultation</span>
                  </Link>
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
  );
};

export default PortfolioDetailSection;
