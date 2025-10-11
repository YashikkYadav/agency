import React from 'react';

const CTASection = () => {
  return (
    <div className="section">
      <div className="mx-auto align-items-center" style={{ maxWidth: '1770px' }}>
        <div className="d-flex flex-column gap-5 bg-color-2 rounded-5" style={{ padding: '7rem 0' }}>
          <div className="cta-text text-center lh-1 scrollanimation animated fadeInDown adr-9">
            <span className="accent-color">**READY TO TRANSFORM-</span><br />
            <span className="fw-normal">YOUR DIGITAL PRESENCE</span> <span
              className="fst-italic text-decoration-underline">WITH US</span>
          </div>
          <div className="row row-cols-3 px-2">
            <div className="col-2 mb-3"></div>
            <div className="col-8 mb-3">
              <div className="d-flex flex-column align-items-center gap-3">
                <p className="text-center scrollanimation animated fadeInDown adr-9 adl-2">
                  <span className="fw-bold">Elevate your brand</span> online with our expert social media strategies and creative marketing solutions. Let's take <br /> your business to new heights of digital success!
                </p>
                <div
                  className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-4">
                  <a href="/contact-us" className="btn btn-accent cta">
                    Get Started Today
                  </a>

                  <a href="/contact-us" className="btn btn-accent-3 cta">
                    Schedule a Free Consultation
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3">
              <img className="img-fluid" src="/image/icon 5.png" alt="Yashik Yadav and Co call to action icon" width="119" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;