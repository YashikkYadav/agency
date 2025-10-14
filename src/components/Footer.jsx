import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="section " style={{ paddingBottom: "20px" }}>
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col col-xl-8 mb-3">
              <div className="d-flex flex-column" style={{ gap: "10rem" }}>
                <div>
                  <h3>READY TO GROW YOUR BRAND?</h3>
                  <p>Let's take your brand to the next level. Get in touch!</p>
                </div>
                <div>
                  <h5>info@yashikyadavanco.com</h5>
                  <img
                    className="img-fluid"
                    src="/image/site logo.png"
                    alt="Yashik Yadav and Co Agency Logo"
                    width="450"
                  />
                </div>
              </div>
            </div>
            <div className="col col-xl-4 mb-3 d-flex justify-content-center align-items-center">
              <div className="circle"></div>
              <button
                className="btn-play footer"
                type="button"
              
                data-bs-target="#e119"
              >
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
                <Link to="/" className="btn-play__circle bg-accent-color-3">
                  <i className="rtmicon rtmicon-arrow-up-right btn-play__icon"></i>
                  <i className="rtmicon rtmicon-arrow-up-right btn-play__icon btn-play__icon--copy"></i>
                </Link>
              </button>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="text-color-2 m-0">
              © 2025 Yashik Yadav and Co. All Rights Reserved.
            </p>
            <div className="d-flex flex-row align-items-center gap-2">
              <p className="m-0 text-color-2">Terms & Conditions</p>
              <span className="text-color-2">|</span>
              <p className="m-0">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
