import React from 'react';
import { Link } from 'react-router-dom';
import { PlayButton } from '../common/PlayButton';

const HeroSection = () => {
  return (
    <div className="section bg-image pb-0 px-xl-0">
      <div className="r-container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="row row-xl-cols-2 row-cols-1 mt-5 justify-content-between">
          <div className="col col-xl-10 mb-3">
            <div className="row row-cols-xl-2 row-cols-1">
              <div className="col col-xl-10 mb-3">
                <h1 className="text-end fst-italic fw-bold me-xl-5 me-0 scrollanimation animated fadeInDown adr-9">
                  {/* -BOOST YOUR SOCIAL MEDIA// */}
                  {/* {"-We Build your Brands".toUpperCase()}// */}

                  -WE BUILD YOUR BRANDS //
                </h1>
              </div>
              <div className="col col-xl-2 mb-3">
                <div className="d-flex align-items-end justify-content-end pt-4 float-icon">
                  <img className="img-fluid" src="/image/icon 2.png" alt=" hero section image" />
                </div>
              </div>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 align-items-center">
              {/* <div className="col col-xl-2 mb-3">
                <button className="btn-play" type="button"  data-bs-target="#e119">
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
                  <Link to="/about-us" className="btn-play__circle bg-accent-color">
                    <i className="rtmicon rtmicon-arrow-down-right btn-play__icon"></i>
                    <i className="rtmicon rtmicon-arrow-down-right btn-play__icon btn-play__icon--copy"></i>
                  </Link>
                </button>
              </div> */}
              <PlayButton/>
              <div className="col col-xl-10 mb-3">
                <div className="d-flex flex-column">
                  <h2 className="text-lg-end scrollanimation animated fadeInDown adr-9 adl-2">That Scale</h2>
                  <div className="d-flex flex-lg-row flex-column-reverse align-items-lg-end justify-content-end gap-xl-5 gap-3 w-100">
                    <p className="scrollanimation animated fadeInDown adr-9 adl-6">
                      Branding and Marketing  <br /> Agency for Businesses & Brands
                    </p>
                    {/* <h1 className="text-lg-end scrollanimation animated fadeInDown adr-9 adl-4">*Reboost</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-xl-1 mb-3">
            <div className="social-wrapper">
              <p className="follow-text">FOLLOW US</p>
              <i className="rtmicon rtmicon-arrow-down text-color-2"></i>
              <div className="social-icons">
               <a href="https://www.facebook.com" aria-label="Follow us on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com" aria-label="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com" aria-label="Follow us on Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com" aria-label="Follow us on YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;