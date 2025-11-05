import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceCategories } from "../assets/data/serviceCategories";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const headerRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const { pathname } = useLocation();
  const lastScrollY = useRef(0);
  const isHeaderVisible = useRef(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleCategoryHover = (index) => {
    setOpenCategoryIndex(index);
  };

  const handleCategoryLeave = () => {
    setOpenCategoryIndex(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setOpenCategoryIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only update if scrolled more than 10 pixels to avoid micro-movements
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past 100px → hide header
        if (isHeaderVisible.current) {
          isHeaderVisible.current = false;
          if (headerRef.current) {
            headerRef.current.style.top = "-80px";
          }
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up → show header
        if (!isHeaderVisible.current) {
          isHeaderVisible.current = true;
          if (headerRef.current) {
            headerRef.current.style.top = "0";
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset header visibility when pathname changes
  useEffect(() => {
    isHeaderVisible.current = true;
    if (headerRef.current) {
      headerRef.current.style.top = "0";
    }
    lastScrollY.current = 0;
    // Close dropdowns when navigating to a new page
    setOpenCategoryIndex(null);
  }, [pathname]);

  return (
    <div
      ref={headerRef}
      id="header"
      style={{
        position: "fixed",
        top: "0",
        left: 0,
        right: 0,
        height: "80px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        transition: "top 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <div className="r-container">
        <div className="navbar d-xl-flex flex-xl-nowrap">
          <div className="container-fluid navbar-expand-xl">
            <div style={{ width: "25%" }}>
              <Link to="/" className="navbar-brand">
                <img
                  src="/image/site logo.png"
                  // src="/image/agencylogo.png"
                  // src="/image/YY&Co. Creatives (1).png"
                  className="img-fluid w-150"
                  alt="Logo yashik yadav and co "
                />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <i className="rtmicon rtmicon-bars"></i>
            </button>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item ">
                  <Link
                    to="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about-us"
                    className={`nav-link ${
                      pathname === "/about-us" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown" ref={servicesDropdownRef}>
                  <Link
                    to="/services"
                    className={`nav-link dropdown-toggle ${
                      pathname.startsWith("/services") ? "active" : ""
                    }`}
                    role="button"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    style={{ minWidth: "250px", transition: "all 0.3s ease" }}
                  >
                    {serviceCategories.map((category, index) => (
                      <li
                        key={index}
                        className="dropdown-submenu"
                        // onMouseEnter={() => handleCategoryHover(index)}
                        onMouseEnter={() => handleCategoryHover(index)}
                        onMouseLeave={handleCategoryLeave}
                      >
                        <Link
                          className="dropdown-item dropdown-toggle"
                          // to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          {category.title}
                        </Link>
                        {openCategoryIndex === index && (
                          <ul
                            className="dropdown-menu dropdown-submenu-menu"
                            style={{
                              position: "absolute",
                              left: "100%",
                              top: "0",
                              minWidth: "250px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  className="dropdown-item"
                                  to={item.link}
                                  style={{
                                    whiteSpace: "normal",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={`nav-link ${
                      pathname === "/portfolio" ? "active" : ""
                    }`}
                  >
                    Our Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-none d-xl-flex flex-row gap-3 align-items-center">
            <div className="w-max-content d-flex flex-row align-items-center gap-3 m-xl-0 mt-3 mx-auto">
              <Link
                className="btn btn-accent d-flex flex-row gap-3"
                to="/contact-us"
              >
                <span>Contact Us</span>
                <i className="rtmicon rtmicon-arrow-up-right"></i>
              </Link>
            </div>

            <button
              className="btn btn-toggler-accent"
              type="button"
              onClick={toggleOffcanvas}
              aria-controls="offcanvasDark"
            >
              <i className="rtmicon rtmicon-bars fw-bold"></i>
            </button>

            {/* Offcanvas */}
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "60%",
                maxWidth: isOffcanvasOpen ? "100%" : "0",
                height: "100%",
                backgroundColor: "#292929",
                overflowY: "auto",
                transition: "all 0.5s ease",
                visibility: isOffcanvasOpen ? "visible" : "hidden",
                zIndex: 1050,
              }}
            >
              <div
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "1rem",
                }}
              >
                <button
                  type="button"
                  onClick={toggleOffcanvas}
                  aria-label="Close"
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
              </div>

              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/image/site logo.png"
                    alt=""
                    style={{ width: "350px", height: "auto" }}
                  />
                </div>

                <p
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >
                  We help brands grow with creative content and smart social
                  media strategies that connect, engage, and deliver real
                  results.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/image/aboutpage/1.png"
                      alt=""
                      style={{
                        width: "250px",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                    <img
                      src="/image/aboutpage/4.png"
                      alt=""
                      style={{
                        width: "250px",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/image/aboutpage/3.png"
                      alt=""
                      style={{
                        width: "250px",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                    <img
                      src="/image/aboutpage/5.png"
                      alt=""
                      style={{
                        width: "250px",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-row align-items-center gap-2">
                    <i className="rtmicon rtmicon-location text-color fw-bold"></i>
                    <span className="text-color">
                      DCM, Jaipur, Rajasthan, India, 302020
                    </span>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-2">
                    <i className="rtmicon rtmicon-globe text-color fw-bold"></i>
                    <span className="text-color">www.yashikyadavanco.com</span>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-2">
                    <i className="rtmicon rtmicon-classic-phone text-color fw-bold"></i>
                    <span className="text-color">+91 9887007362</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginTop: "1rem",
                  }}
                  className="social-icons row"
                >
                  <a href="https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UC3qcrtRPd8bpvV0hvm_6BnA">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
