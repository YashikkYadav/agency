import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Yashik Yadav and Co transformed our digital presence with their strategic approach. Our website and social engagement have never been more effective!",
      name: "Amit Patel",
      title: "TechStart Solutions"
    },
    {
      id: 2,
      text: "Their digital marketing expertise revolutionized our online visibility. Engagement increased significantly, and we achieved real growth within weeks!",
      name: "Sneha Gupta",
      title: "FashionFusion Brand"
    },
    {
      id: 3,
      text: "The team simplified our digital marketing journey. Now, our social media operates efficiently with outstanding results and ROI",
      name: "Vikram Singh",
      title: "HealthFirst Clinics"
    },
    {
      id: 4,
      text: "As a startup, we needed cost-effective yet powerful marketing solutions. Their team exceeded expectations with exceptional support and growth!",
      name: "Rohan Mehta",
      title: "InnovateTech"
    },
    {
      id: 5,
      text: "Their digital marketing expertise revolutionized our online visibility. Engagement increased significantly, and we achieved real growth within weeks!",
      name: "Amit Patel",
      title: "TechStart Solutions"
    }
  ];

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
    <div className="section position-relative">
      <div className="r-container">
        <div className="d-flex flex-column">
          <div className="sub-heading text-accent second position-absolute" style={{ zIndex: -1, top: '-2%', right: '11%' }}>
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
            <Link to="/about-us" className="icon-box" aria-label="Learn more about our client success stories">
              <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
            </Link>
          </div>
          <div className="overflow-hidden">
            <div className="swiper swiperTestimonials">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Slides */}
                {testimonials.map((testimonial) => (
                  <div className="swiper-slide" key={testimonial.id}>
                    <div className="card testimonial-container justify-content-center align-items-center">
                      <div className="card-testimonial">
                        <hr className="border-up" />
                        <div className="d-flex flex-row gap-2">
                          <i className="rtmicon rtmicon-blockquote" style={{ fontSize: '32px' }}></i>
                          <p className="testimonial-text">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-start gap-2">
                          <hr className="accent-color" style={{ width: '32px' }} />
                          <div className="d-flex flex-column gap-1 align-items-start">
                            <h5 className="m-0 text-color">{testimonial.name}</h5>
                            <p>{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;