import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="section position-relative">
      <div className="r-container">
        <div className="d-flex flex-column gap-3">
          <div
            className="sub-heading text-accent second position-absolute"
            style={{ zIndex: -1, right: "10%", top: "0" }}
          >
            BLOG & NEWS
          </div>
          <div className="d-flex flex-row align-items-center gap-2">
            <div
              className="border-bottom border-4 border-accent mb-5"
              style={{ width: "100px" }}
            ></div>
            <h3 className="scrollanimation animated fadeInDown adr-9">
              Stay Updated with <br /> the Latest Trends
            </h3>
          </div>
          <div className="row row-cols-lg-3 row-cols-1">
            <div className="col-lg-4 mb-3">
              <div className="d-flex flex-column gap-4">
                <div className="card-blog position-relative">
                  <img
                    className="img-fluid"
                    src="/image/13.png"
                    alt="Social media trends blog post image"
                    style={{ aspectRatio: "5/3" }}
                  />
                  <Link to="/single-post" className="card-blog-detail">
                    <div className="button">Social Media Strategies</div>
                    <h5>5 Social Media Trends You Need to Know in 2025</h5>
                    <div className="small-text card-blog-date">
                      February 24, 2025
                    </div>
                  </Link>
                  <img
                    className="position-absolute"
                    src="/image/icon 10.png"
                    alt="Decorative icon for blog post"
                    width="66"
                    style={{
                      aspectRatio: "1/1",
                      bottom: "-20px",
                      right: "-10px",
                    }}
                  />
                </div>
                <Link to="/single-post" className="card-blog-row">
                  <img
                    className="img-fluid"
                    src="/image/15.jpg"
                    alt="SEO vs Paid Ads blog post image"
                    width="103px"
                    style={{ aspectRatio: "1/1" }}
                  />

                  <div className="flex flex-column">
                    <h6>
                      SEO vs. Paid Ads: Which One Works Best for Your Business?
                    </h6>
                    <div className="small-text text-color-2">
                      February 20, 2025
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col col-lg-4 mb-3">
              <div className="card-blog">
                <img
                  className="img-fluid"
                  src="/image/17.png"
                  alt="Best time to post on social media blog post image"
                  style={{ aspectRatio: "5/6" }}
                />
                <Link to="/single-post" className="card-blog-detail">
                  <div className="button">Social Media Strategies</div>
                  <h5>The Best Time to Post on Social Media in 2025</h5>
                  <div className="small-text text-color-2">4 hours ago</div>
                </Link>
              </div>
            </div>
            <div className="col col-lg-4 mb-3">
              <div className="d-flex flex-column gap-3">
                <div className="card-blog">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="/image/18.png"
                      alt="Branding blog post image"
                      style={{ aspectRatio: "5/3" }}
                    />
                    {/* <button type="button" className="request-loader" data-bs-toggle="modal"
                      data-bs-target="#e119">
                      <i className="rtmicon rtmicon-play ms-1" aria-hidden="true"></i>
                    </button> */}
                  </div>
                  <Link to="/single-post" className="card-blog-detail">
                    <div className="button">Branding</div>
                    <h5>
                      The Power of Branding: How Small Businesses Can Stand Out
                    </h5>
                    <div className="small-text card-blog-date">
                      February 24, 2025
                    </div>
                  </Link>
                </div>
                <Link
                  to="/single-post"
                  className="card-blog-row position-relative"
                >
                  <img
                    className="img-fluid"
                    src="/image/14.png"
                    alt="AI in digital marketing blog post image"
                    width="103px"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <div className="flex flex-column">
                    <h6>How AI is Changing the Future of Digital Marketing</h6>
                    <div className="small-text card-blog-date">
                      February 20, 2025
                    </div>
                  </div>
                  <img
                    className="img-fluid position-absolute"
                    src="/image/icon 11.png"
                    alt="Decorative icon for blog post"
                    width="79"
                    style={{ bottom: "-20px", right: "30px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="e119" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark-color">
            {/* <iframe className="ifr-video" src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
