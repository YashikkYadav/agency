import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.swiperTestimonials', {
          autoplay: {
            delay: 3000
          },
          speed: 2000,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
          loop: false,
          grabCursor: true,
          breakpoints: {
            // when window width is >= 360px
            360: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            }
          },
          // If we need pagination
          pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });
      }
    };

    // Initialize Swiper
    initSwiper();

    // Re-initialize if Swiper wasn't ready initially
    if (typeof window !== 'undefined' && !window.Swiper) {
      const swiperInterval = setInterval(() => {
        if (window.Swiper) {
          clearInterval(swiperInterval);
          initSwiper();
        }
      }, 100);
      
      // Clear interval after 5 seconds to prevent infinite loop
      setTimeout(() => clearInterval(swiperInterval), 5000);
    }
  }, []);

  return (
    <div className="section position-relative home-section">
      <div className="r-container">
        <div className="d-flex flex-column">
          <div className="sub-heading text-accent second position-absolute home-subheading"
            style={{ zIndex: -1, top: '-2%', right: '11%' }}>
            TESTIMONIALS
          </div>
          <h3 className="text-xl-start text-center scrollanimation animated fadeInDown adr-9">
            SUCCESS STORIES FROM
          </h3>
          <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between gap-3">
            <h3 className="scrollanimation animated fadeInDown adr-9 adl-1">
              OUR CLIENTS
            </h3>
            <div className="border-bottom border-4" style={{ width: '246px' }}></div>
            <p className="scrollanimation animated fadeInDown adr-9 adl-2">
              From strategy to execution, here's how we've <br /> made a difference for our clients.
            </p>
            <Link to="/about-us" className="icon-box">
              <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
            </Link>
          </div>
          <div className="overflow-hidden">
            <div className="swiper swiperTestimonials">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Slides */ }
                <div className="swiper-slide">
                  <div className="card testimonial-container justify-content-center align-items-center">
                    <div className="card-testimonial">
                      <hr className="border-up" />
                      <div className="d-flex flex-row gap-2">
                        <i className="rtmicon rtmicon-blockquote" style={{ fontSize: '32px' }}></i>
                        <p className="testimonial-text home-testimonial-text">
                         "YY & CO. scaled our organic traffic by 280% in under 8 months." – SaaS Founder
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr className="accent-color" style={{ width: '32px' }} />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Anilesh Mahtur</h5>
                          <p>Businesses Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card testimonial-container justify-content-center align-items-center">
                    <div className="card-testimonial">
                      <hr className="border-up" />
                      <div className="d-flex flex-row gap-2">
                        <i className="rtmicon rtmicon-blockquote" style={{ fontSize: '32px' }}></i>
                        <p className="testimonial-text home-testimonial-text">
                         "From technical SEO to link building, the team delivered beyond expectations." – E-commerce CEO
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr className="accent-color" style={{ width: '32px' }} />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Nikhil Verma</h5>
                          <p>Corporate Consultant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card testimonial-container justify-content-center align-items-center">
                    <div className="card-testimonial">
                      <hr className="border-up" />
                      <div className="d-flex flex-row gap-2">
                        <i className="rtmicon rtmicon-blockquote" style={{ fontSize: '32px' }}></i>
                        <p className="testimonial-text home-testimonial-text">
                         "Best SEO agency for startups expanding globally." – Healthtech Co.
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr className="accent-color" style={{ width: '32px' }} />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Nitin Negi</h5>
                          <p>Brand Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */ }
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;