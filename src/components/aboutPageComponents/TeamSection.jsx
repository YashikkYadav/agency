import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TeamSection = () => {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yashik Yadav and Co",
    member: [
      {
        "@type": "Person",
        name: "Yashik Yadav",
        jobTitle: "Founder & CEO",
        worksFor: {
          "@type": "Organization",
          name: "Yashik Yadav and Co",
        },
      },
      {
        "@type": "Person",
        name: "Ananya Sharma",
        jobTitle: "Chief Marketing Officer",
        worksFor: {
          "@type": "Organization",
          name: "Yashik Yadav and Co",
        },
      },
      {
        "@type": "Person",
        name: "Rohan Mehta",
        jobTitle: "Creative Director",
        worksFor: {
          "@type": "Organization",
          name: "Yashik Yadav and Co",
        },
      },
      {
        "@type": "Person",
        name: "Priya Desai",
        jobTitle: "Content Strategy Lead",
        worksFor: {
          "@type": "Organization",
          name: "Yashik Yadav and Co",
        },
      },
    ],
  };

  return (
    <div className="section position-relative">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(teamSchema)}</script>
      </Helmet>
      <div className="r-container">
        <div
          className="sub-heading text-accent second position-absolute"
          style={{ zIndex: -1, top: "3%", right: "12%" }}
        >
          OUR TEAM
        </div>
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-lg-row flex-column justify-content-between">
            <div className="d-flex flex-row align-items-center gap-2">
              <div
                className="border-bottom border-4 border-accent mb-5"
                style={{ width: "100px" }}
              ></div>
              <h2 className="scrollanimation animated fadeInDown adr-9">
                Meet Our Expert Digital Marketing Team
              </h2>
            </div>
            <p
              className="align-self-end scrollanimation animated fadeInDown adr-9 adl-1"
              style={{ marginTop: "7rem" }}
            >
              Our team of social media strategists, content creators, and
              digital marketing experts is dedicated to helping your brand
              thrive in the ever-evolving digital landscape.
            </p>
          </div>
          <div className="row row-cols-xl-4 row-cols-1">
            <div className="col mb-3">
              <div className="card-team">
                <div>
                  <img
                    src="/image/aboutpage/Team 1.png"
                    className="img-fluid float-img-team"
                    alt="Yashik Yadav - Founder & CEO"
                  />
                </div>
                <div className="card-team-detail">
                  <div className="d-flex flex-column">
                    <h5 className="background-color">Yashik Yadav</h5>
                    <div className="small-text background-color">
                      Founder & CEO
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <div className="social-item">
                      <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card-team">
                <div>
                  <img
                    src="/image/aboutpage/Team 2.png"
                    className="img-fluid float-img-team"
                    alt="Ananya Sharma - Chief Marketing Officer"
                  />
                </div>
                <div className="card-team-detail">
                  <div className="d-flex flex-column">
                    <h5 className="background-color">Ananya Sharma</h5>
                    <div className="small-text background-color">
                      Chief Marketing Officer
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <div className="social-item">
                      <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card-team">
                <div>
                  <img
                    src="/image/aboutpage/Team 3.png"
                    className="img-fluid float-img-team"
                    alt="Rohan Mehta - Creative Director"
                  />
                </div>
                <div className="card-team-detail">
                  <div className="d-flex flex-column">
                    <h5 className="background-color">Rohan Mehta</h5>
                    <div className="small-text background-color">
                      Creative Director
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <div className="social-item">
                      <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card-team">
                <div>
                  <img
                    src="/image/aboutpage/Team 4.png"
                    className="img-fluid float-img-team"
                    alt="Priya Desai - Content Strategy Lead"
                  />
                </div>
                <div className="card-team-detail">
                  <div className="d-flex flex-column">
                    <h5 className="background-color">Priya Desai</h5>
                    <div className="small-text background-color">
                      Content Strategy Lead
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <div className="social-item">
                      <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                    <div className="social-item">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center m-xl-0 mt-3 mx-auto">
            <Link to="" className="btn btn-accent d-flex flex-row gap-3">
              <span>View All Team Members</span>
              <i className="rtmicon rtmicon-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
