import React from 'react';
import Servicescards from './Servicescards';

const ServicesSection = () => {
  return (
    <>
      {/* Our Services */}
      <div className="section position-relative">
        <div className="r-container">
          <div className="sub-heading text-accent second position-absolute" style={{ zIndex: -1, top: 0, right: '10%' }}>
            OUR SERVICES
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="row row-lg-cols-2 row-cols-1">
              <div className="col col-lg-7 mb-3">
                <div className="d-flex flex-column gap-5">
                  <div className="d-flex flex-row align-items-center gap-2">
                    <div className="border-bottom border-4 border-accent mb-5" style={{ width: '100px' }}></div>
                    <h3 className="scrollanimation animated fadeInDown adr-9">
                      Comprehensive Digital Solutions
                    </h3>
                  </div>
                  <p className="ms-lg-5 ps-lg-5 scrollanimation animated fadeInDown adr-9 adl-2"
                    style={{ maxWidth: '73%' }}>
                    We deliver end-to-end digital marketing services designed to elevate your brand,
                    engage your audience, and drive measurable business results.
                  </p>
                </div>
              </div>
              <div className="col col-lg-5 mb-3">
                <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2 mb-2">
                  <span className="w-max-content small-text btn-accent-2 active">Social Media
                    Management</span>
                  <span className="w-max-content small-text btn-accent-2">Content Creation</span>
                </div>
                <div className="d-flex flex-xl-row flex-column justify-content-xl-end gap-2 mb-2">
                  <span className="w-max-content small-text btn-accent-2">Influencer & Brand
                    Collaboration</span>
                  <span className="w-max-content small-text btn-accent-2">Paid Ads & Campaign</span>
                </div>
                <div className="d-flex flex-xl-row flex-column justify-content-xl-end gap-2 mb-2">
                  <span className="w-max-content small-text btn-accent-2">Brand Strategy & Growth</span>
                  <span className="w-max-content small-text btn-accent-2">Website Optimization</span>
                </div>
                <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2 mb-2">
                  <span className="w-max-content small-text btn-accent-2">Event & Campaign Promotion</span>
                </div>
                <div className="d-flex flex-xl-row flex-column justify-content-lg-end gap-2">
                  <span className="w-max-content small-text btn-accent-2">Corporate & Personal Branding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Services */}
      <Servicescards />
    </>
  );
};

export default ServicesSection;