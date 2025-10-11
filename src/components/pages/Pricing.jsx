import React from 'react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://yashikyadavandco.com/pricing-plan" />
      </Helmet>
      {/* Hero */}
      <div className="section bg-image-pricing pb-0 px-xl-0">
        <div className="r-container float-container">
          <div className="row row-cols-xl-2 row-cols-1 mt-5 justify-content-between">
            <div className="col col-xl-10 mb-3">
              <div className="d-flex flex-column gap-5">
                <h2 className="fw-bold fst-italic scrollanimation animated fadeInDown adr-9">
                  PRICING PLAN
                </h2>
                <div className="d-flex flex-lg-row flex-column-reverse align-items-center justify-content-xl-between justify-content-center gap-lg-5">
                  <img src="/image/icon 6.png" className="img-fluid" alt="Decorative icon for pricing page"
                    style={{ marginLeft: '8rem', marginTop: '3rem' }} />
                  <h2 className="fw-normal fst-italic text-end scrollanimation animated fadeInDown adr-9 adl-2">
                    FLEXIBLE PACKAGES <br /> FOR YOUR NEEDS
                  </h2>
                </div>
                <button className="btn-play ms-auto" type="button" data-bs-toggle="modal" data-bs-target="#e119">
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
                  <a href="/about-us" className="btn-play__circle bg-accent-color-3">
                    <i className="rtmicon rtmicon-arrow-down-right btn-play__icon"></i>
                    <i className="rtmicon rtmicon-arrow-down-right btn-play__icon btn-play__icon--copy"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="col col-xl-1 mb-3">
              <div className="social-wrapper">
                <p className="follow-text">FOLLOW US</p>
                <i className="rtmicon rtmicon-arrow-down text-color-2"></i>
                <div className="social-icons">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Additional sections would go here */}
    </div>
  );
};

export default Pricing;