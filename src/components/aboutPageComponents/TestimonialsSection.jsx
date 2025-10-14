import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Yashik Yadav and Co",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: [
      {
        "@type": "Person",
        name: "Amit Patel",
      },
      {
        "@type": "Person",
        name: "Sneha Gupta",
      },
      {
        "@type": "Person",
        name: "Vikram Singh",
      },
    ],
  };

  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (typeof window !== "undefined" && window.Swiper) {
        new window.Swiper(".swiperTestimonials", {
          autoplay: {
            delay: 3000,
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
            },
          },
          // If we need pagination
          pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });
      }
    };

    // Initialize Swiper
    initSwiper();

    // Re-initialize if Swiper wasn't ready initially
    if (typeof window !== "undefined" && !window.Swiper) {
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      <div className="r-container">
        <div className="d-flex flex-column">
          <div
            className="sub-heading text-accent second position-absolute"
            style={{ zIndex: -1, top: "-2%", right: "11%" }}
          >
            TESTIMONIALS
          </div>
          <h2 className="text-xl-start text-center scrollanimation animated fadeInDown adr-9">
            Success Stories From Our
          </h2>
          <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between gap-3">
            <h2 className="scrollanimation animated fadeInDown adr-9 adl-1">
              Valued Clients
            </h2>
            <div
              className="border-bottom border-4"
              style={{ width: "246px" }}
            ></div>
            <p className="scrollanimation animated fadeInDown adr-9 adl-2">
              From strategy to execution, here's how Yashik Yadav and Co has{" "}
              <br /> transformed brands and delivered exceptional results.
            </p>
            <Link
              to="/about-us"
              className="icon-box"
              aria-label="Learn more about our client success stories"
            >
              <i className="rtmicon rtmicon-arrow-up-right fw-bold"></i>
            </Link>
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
                        <i
                          className="rtmicon rtmicon-blockquote"
                          style={{ fontSize: "32px" }}
                        ></i>
                        <p className="testimonial-text">
                          Yashik Yadav and Co completely transformed our digital
                          presence. Their strategic approach and creative
                          execution helped us increase our social media
                          engagement by 300% in just three months!
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr
                          className="accent-color"
                          style={{ width: "32px" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Amit Patel</h5>
                          <p>Founder, TechStart Solutions</p>
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
                        <i
                          className="rtmicon rtmicon-blockquote"
                          style={{ fontSize: "32px" }}
                        ></i>
                        <p className="testimonial-text">
                          Working with Yashik Yadav and Co has been a
                          game-changer for our brand. Their team's expertise in
                          social media strategy delivered results beyond our
                          expectations, significantly boosting our online
                          visibility.
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr
                          className="accent-color"
                          style={{ width: "32px" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Sneha Gupta</h5>
                          <p>Marketing Director, FashionFusion</p>
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
                        <i
                          className="rtmicon rtmicon-blockquote"
                          style={{ fontSize: "32px" }}
                        ></i>
                        <p className="testimonial-text">
                          The team at Yashik Yadav and Co made our brand's
                          digital transformation seamless and effective. Their
                          data-driven approach and creative content strategy
                          have consistently delivered ROI for our business.
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-start gap-2">
                        <hr
                          className="accent-color"
                          style={{ width: "32px" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h5 className="m-0 text-color">Vikram Singh</h5>
                          <p>CEO, HealthFirst Clinics</p>
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
  );
};

export default TestimonialsSection;
