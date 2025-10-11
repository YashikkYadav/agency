import React from 'react';
import { Link } from 'react-router-dom';

const TextualShowcase = () => {
  return (
    <div className="section">
      <div className="r-container">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9">
            <div className="textual-showcase">
              "GROWING
            </div>
            <img src="/image/img 6.webp" className="img-fluid rounded-pill" alt="Decorative text image for brand growth"
              style={{ aspectRatio: '9/3', height: '60px' }} />
            <div className="textual-showcase">
              YOUR BRAND*
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-2">
            <div className="textual-showcase text-decoration-underline">
              ON THE
            </div>
            <Link to="/about-us" className="icon-textual">
              <i className="rtmicon rtmicon-arrow-up-right"></i>
            </Link>
            <div className="textual-showcase fw-bold">
              RIGHT PLATFORM
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-4">
            <div className="textual-showcase">
              -AT
            </div>
            <img src="/image/img 7.png" className="img-fluid rounded-pill" alt="Decorative text image for right platform"
              style={{ width: '400px', height: '70px' }} />
            <div className="textual-showcase border border-4 p-2">
              THE RIGHT TIME
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-6">
            <div className="textual-showcase">
              <span className="fst-italic fw-bold">'WITH'</span> A
            </div>
            <img src="/image/img 8.webp" className="img-fluid rounded-pill" alt="Decorative text image for smart plan"
              style={{ width: '270px', height: '60px' }} />
            <div className="textual-showcase fst-italic">
              SMART PLAN."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextualShowcase;