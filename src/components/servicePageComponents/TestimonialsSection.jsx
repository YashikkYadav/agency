import React, { useEffect } from 'react';

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
    <>
      {/* Testimonials */}
      <div className="section position-relative">
        <div className="r-container">
          <div className="d-flex flex-column">
            <div className="sub-heading text-accent second position-absolute"
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
                From strategy to execution, discover how we've <br /> delivered exceptional results for our clients.
              </p>
              <a href="/about-us" className="icon-box" aria-label="Learn more about our client success stories">
                <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
              </a>
            </div>
            <div className="overflow-hidden">
              <div className="swiper swiperTestimonials">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide">
                    <div className="card testimonial-container justify-content-center align-items-center">
                      <div className="card-testimonial">
                        <hr className="border-up" />
                        <div className="d-flex flex-row gap-2">
                          <i className="rtmicon rtmicon-blockquote" style={{ fontSize: '32px' }}></i>
                          <p className="testimonial-text">
                            Yashik Yadav and Co transformed our digital presence with their strategic approach. Our website
                            and social engagement have never been more effective!
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">Amit Patel</h5>
                            <p>TechStart Solutions</p>
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
                          <p className="testimonial-text">
                            Their digital marketing expertise revolutionized our online visibility.
                            Engagement
                            increased significantly, and we achieved real growth within weeks!
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">Sneha Gupta</h5>
                            <p>FashionFusion Brand</p>
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
                          <p className="testimonial-text">
                            The team simplified our digital marketing journey. Now, our social
                            media operates efficiently with outstanding results and ROI
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">Vikram Singh</h5>
                            <p>HealthFirst Clinics</p>
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
                          <p className="testimonial-text">
                            As a startup, we needed cost-effective yet powerful marketing solutions.
                            Their team exceeded expectations with exceptional support and growth!
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">Rohan Mehta</h5>
                            <p>InnovateTech</p>
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
                          <p className="testimonial-text">
                            Their digital marketing expertise revolutionized our online visibility.
                            Engagement
                            increased significantly, and we achieved real growth within weeks!
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">Amit Patel</h5>
                            <p>TechStart Solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials */}
    </>
  );
};

export default TestimonialsSection;