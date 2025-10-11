import React from 'react';
import { Link } from 'react-router-dom';

const TextualShowcase = () => {
  return (
    <div className="section">
      <div className="r-container">
        <div className="d-flex flex-column align-items-center gap-3">
          <div
            className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9">
            <div className="textual-showcase">
              "ELEVATING
            </div>
            <img src="/image/img 6.webp" className="img-fluid rounded-pill" alt="Yashik Yadav and Co brand elevation"
              style={{ aspectRatio: '9/3', height: '60px' }} />
            <div className="textual-showcase">
              YOUR BRAND*
            </div>
          </div>
          <div
            className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-2">
            <div className="textual-showcase text-decoration-underline">
              THROUGH
            </div>
            <Link to="/about-us" className="icon-textual" aria-label="Learn more about our approach">
              <i className="rtmicon rtmicon-arrow-up-right"></i>
            </Link>
            <div className="textual-showcase fw-bold">
               INNOVATION
            </div>
          </div>
          <div
            className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-4">
            <div className="textual-showcase">
              -WITH
            </div>
            <img src="/image/img 7.png" className="img-fluid rounded-pill" alt="Yashik Yadav and Co strategic approach"
              style={{ width: '400px', height: '70px' }} />
            <div className="textual-showcase border border-4 p-2">
              PRECISION 
            </div>
          </div>
          <div
            className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3 scrollanimation animated fadeIn adr-9 adl-6">
            <div className="textual-showcase">
              <span className="fst-italic fw-bold">'AND'</span> 
            </div>
            <img src="/image/img 8.webp" className="img-fluid rounded-pill" alt="Yashik Yadav and Co results-driven approach"
              style={{ width: '270px', height: '60px' }} />
            <div className="textual-showcase fst-italic">
              RESULTS DRIVEN PLAN.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextualShowcase;