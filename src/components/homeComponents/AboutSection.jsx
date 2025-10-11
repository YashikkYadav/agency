import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <>
    <div className="section position-relative">
      <div className="r-container">
        <div className="sub-heading position-absolute text-accent second"
          style={{ zIndex: -1, right: '15%', top: '-4%' }}>
          ABOUT US
        </div>
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-row align-items-center gap-2">
            <div className="border-bottom border-4 border-accent mb-5" style={{ width: '100px' }}></div>
            <h3 className="scrollanimation animated fadeInDown adr-9">
              Why Us ?<br />Marketing Agency for Your Growth
            </h3>
          </div>
          <div className="row row-cols-xl-2 row-cols-1 gap-5">
            <div className="col col-xl-4 mb-3">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-fluid" src="/image/1.png" alt="office work environment"
                  style={{ aspectRatio: '1/1',borderRadius: '10px' }} />
                <button className="btn-play about" type="button" data-bs-toggle="modal"
                  data-bs-target="#e119" style={{ marginTop: '-6rem' }}>
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
                  <div className="btn-play__circle bg-accent-color-4">
                    <i className="rtmicon rtmicon-play-button text-color btn-play__icon"></i>
                    <i className="rtmicon rtmicon-play-button btn-play__icon btn-play__icon--copy"></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="col col-xl-7 mb-3">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3">
                  <p className="scrollanimation animated fadeInDown adr-9 adl-2" style={{ maxWidth: '65%' }}>
                    We craft full-funnel digital marketing strategies that blend creativity, data, and automation to deliver measurable growth. From brand storytelling and performance marketing to CRM and lead nurturing - we help businesses scale smarter, faster, and stronger across markets
                  </p>
                  <div className="d-flex flex-row align-items-center gap-3">
                    <div className="w-max-content">
                      <Link className="btn btn-accent d-flex flex-row gap-3" to="/contact-us">
                        <span>Learn More</span>
                        <i className="rtmicon rtmicon-arrow-up-right"></i>
                      </Link>
                    </div>
                    <Link to="/about-us" className="accent-color text-decoration-underline">Discover Our Approach</Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-end gap-5">
                  <div className="d-flex flex-row align-items-center justify-content-evenly rounded-3 bg-accent-color gap-3 py-3 px-5">
                    <div className="position-relative">
                      <div className="customer-container">
                        <div className="customer-item">
                          <img src="/image/aboutpage/reviewer 1.webp" className="img-fluid" alt="Satisfied customer" />
                        </div>
                        <div className="customer-item">
                          <img src="/image/aboutpage/reviewer 2.webp" className="img-fluid" alt="Satisfied customer" />
                        </div>
                        <div className="customer-item">
                          <img src="/image/aboutpage/reviewer 3.webp" className="img-fluid" alt="Satisfied customer" />
                        </div>
                        <div className="customer-add">
                          <a href="">
                            <i className="rtmicon rtmicon-pluss accent-color"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column scrollanimation animated zoomIn adr-9 adl-2">
                      <h6 className="background-color m-0">4.9 Star</h6>
                      <span className="small-text background-color">Reviewer</span>
                    </div>
                  </div>
                  <img className="img-fluid" src="/image/2.png" alt="out team image" width="384px"
                    style={{ aspectRatio: '16/9',borderRadius: '10px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="e119" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark-color">
            <iframe className="ifr-video" src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"></iframe>
          </div>
        </div>
      </div>

     </div>

     
    </>
    
  );
};

export default AboutSection;