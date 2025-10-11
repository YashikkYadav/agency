import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceCategories } from "../assets/data/serviceCategories";
import {FiChevronsDown, FiChevronsUp } from 
"react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const lastScrollY = useRef(0);
  const isHeaderVisible = useRef(true);

  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Helper function to check if a category is active based on current pathname
  const isCategoryActive = (category, currentPath) => {
    return category.items.some(item => item.link === currentPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isHeaderVisible.current) {
          isHeaderVisible.current = false;
          if (headerRef.current) headerRef.current.style.top = "-80px";
        }
      } else if (currentScrollY < lastScrollY.current) {
        if (!isHeaderVisible.current) {
          isHeaderVisible.current = true;
          if (headerRef.current) headerRef.current.style.top = "0";
        }
      }

      lastScrollY.current = currentScrollY;
    };

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

  useEffect(() => {
    isHeaderVisible.current = true;
    if (headerRef.current) headerRef.current.style.top = "0";
    lastScrollY.current = 0;
    // Close dropdown when navigating to a new page
    setActiveCategory(null);
    setHoveredCategory(null);
  }, [pathname]);

   const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <div className="custom-header" ref={headerRef}>
        <div className="header-container">
          <div className="header-logo">
            <Link to="/">
              <img
                src="/image/site logo.png"
                alt="Logo yashik yadav and co"
                className="logo-image"
              />
            </Link>
          </div>

          <div className="header-links">
            <Link to="/" className={`nav-link ${pathname === '/' ? 'active-header' : ''}`}>
              Home
            </Link>
            <Link to="/about-us" className={`nav-link ${pathname === '/about-us' ? 'active-header' : ''}`}>
              About
            </Link>

            <div
              className={`nav-link dropdown-trigger ${activeCategory === "services" ? 'active' : ''} ${pathname.includes('/services') ? 'active-header' : ''}`}
              // onMouseEnter={() => setActiveCategory("services")}
              onClick={() =>activeCategory==null? setActiveCategory("services"):setActiveCategory(null)}
              // onMouseLeave={() => {
              //   // Keep dropdown open briefly to allow moving to it
              //   setTimeout(() => {
              //     if (!hoveredCategory) {
              //       setActiveCategory(null);
              //     }
              //   }, 100);
              // }}
            >
              <span>Services</span>
              {activeCategory === "services" ? <FiChevronsUp /> : <FiChevronsDown />}
            </div>

            <Link to="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active-header' : ''}`}>
              Our Work
            </Link>
           <div className="header-buttons">
              <Link
              className="btn btn-accent d-flex flex-row gap-3"
                            to="/contact-us"
                          >
                            <span>Contact Us</span>
                            <i className="rtmicon rtmicon-arrow-up-right"></i>
              </Link>
               {/* <button
              className="btn btn-toggler-accent"
              type="button"
              onClick={toggleOffcanvas}
              aria-controls="offcanvasDark"
            >
              <i className="rtmicon rtmicon-bars fw-bold"></i>
            </button> */}
           </div>
 
          </div>
          
          {/* Mobile menu button */}
          <button className="mobile-menu-button btn-toggler-accent" onClick={toggleMobileMenu}>
            <i className="rtmicon rtmicon-bars fw-bold"></i>
          </button>
           
        </div>
         {activeCategory === "services" && (
        <div
          className="dropdown-container"
          // onMouseEnter={() => setHoveredCategory("services")}
          // onClick={() => setHoveredCategory("services")}
          onMouseLeave={() => {
            setHoveredCategory(null);
            setActiveCategory(null);
          }}
        >

          <div className="dropdown-inner" >
            

            <div className="dropdown-categories">
              {serviceCategories.map((category, index) => {
                // Create a URL-friendly version of the category title for the hash fragment
                const categoryHash = category.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    to={`/services#${categoryHash}`}
                    style={{color:"white"}}
                    key={index} 
                    className="dropdown-category"
                    onMouseEnter={() => setHoveredCategory(index)}
                    onClick={() => {
                      setHoveredCategory(index);
                      // Close the dropdown after clicking
                      setActiveCategory(null);
                    }}
                  >
                    <div className={`category-title ${isCategoryActive(category, pathname) ? 'active-header' : ''} ${hoveredCategory === index ? 'active-header' : ''}`}>
                      {category.title}
                    </div>
                  </Link>
                );
              })}
            </div>





            <div className="category-items-container">
              {serviceCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="category-items-wrapper"
                  style={{ display: hoveredCategory === index ? 'block' : 'none' }}
                >
                  <div className="category-items">
                    {category.items.map((item, i) => (
                      <Link 
                        to={item.link} 
                        key={i} 
                        className={`category-item ${pathname === item.link ? 'active-header' : ''}`}
                        onClick={() => {
                          setActiveCategory(null);
                          setHoveredCategory(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="close-dropdown" onClick={() => setActiveCategory(null)} >      <RxCross1 /></div>
        </div>
      )}
     

    

            {/* Offcanvas */}
           
      </div>

      
      {/* Mobile Menu Modal */}
      <div 
        className={`mobile-menu-modal ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          zIndex: 1100,
          display: isMobileMenuOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px"
        }}
      >
        <div 
          style={{
            position: "absolute",
            top: "20px",
            right: "20px"
          }}
        >
          <button 
            className="btn btn-toggler-accent mobile-menu-close-button"
            onClick={closeMobileMenu}
            style={{
              color: "white",
              fontSize: "24px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "0",
              width: "auto",
              height: "auto"
            }}
            aria-label="Close menu"
          >
            <RxCross1 />
          </button>
        </div>
        
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            width: "100%",
            maxWidth: "300px"
          }}
        >
          <Link 
            to="/" 
            className={`nav-link mobile-menu-link ${pathname === '/' ? 'active' : ''}`}
            style={{
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
              padding: "10px 20px",
              width: "100%",
              textAlign: "center",
              borderRadius: "4px"
            }}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link 
            to="/about-us" 
            className={`nav-link mobile-menu-link ${pathname === '/about-us' ? 'active' : ''}`}
            style={{
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
              padding: "10px 20px",
              width: "100%",
              textAlign: "center",
              borderRadius: "4px"
            }}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          
          <div
            className={`nav-link mobile-menu-link ${pathname.includes('/services') ? 'active' : ''}`}
            style={{
              color: "white",
              fontSize: "24px",
              padding: "10px 20px",
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => {
              setActiveCategory(activeCategory === "services" ? null : "services");
            }}
          >
            <span>Services</span>
            {activeCategory === "services" ? <FiChevronsUp style={{marginLeft: "10px"}} /> : <FiChevronsDown style={{marginLeft: "10px"}} />}
          </div>
          
          {activeCategory === "services" && (
            <div 
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%",
                paddingLeft: "20px"
              }}
            >
              {serviceCategories.map((category, index) => (
                <div key={index} style={{width: "100%"}}>
                  <div 
                    className="category-title mobile-service-category"
                    style={{
                      color: "white",
                      fontSize: "18px",
                      padding: "8px 0",
                      cursor: "pointer",
                      fontWeight: "500",
                      borderRadius: "4px"
                    }}
                    onClick={() => setHoveredCategory(hoveredCategory === index ? null : index)}
                  >
                    {category.title}
                    {hoveredCategory === index ? <FiChevronsUp style={{marginLeft: "10px", fontSize: "16px"}} /> : <FiChevronsDown style={{marginLeft: "10px", fontSize: "16px"}} />}
                  </div>
                  
                  {hoveredCategory === index && (
                    <div 
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "10px",
                        paddingLeft: "15px"
                      }}
                    >
                      {category.items.map((item, i) => (
                        <Link 
                          to={item.link} 
                          key={i}
                          className={`mobile-service-item ${pathname === item.link ? 'active' : ''}`}
                          style={{
                            color: pathname === item.link ? "#c9f22c" : "white",
                           
                            fontSize: "16px",
                            textDecoration: "none",
                            padding: "5px 0",
                            borderRadius: "4px"
                          }}
                          onClick={() => {
                            closeMobileMenu();
                            setActiveCategory(null);
                            setHoveredCategory(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          <Link 
            to="/portfolio" 
            className={`nav-link mobile-menu-link ${pathname === '/portfolio' ? 'active' : ''}`}
            style={{
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
              padding: "10px 20px",
              width: "100%",
              textAlign: "center",
              borderRadius: "4px"
            }}
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          
          <Link 
            to="/contact-us" 
            className={` nav-link mobile-menu-link ${pathname === '/contact-us' ? 'active' : ''}`}
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "4px",
              color: "white",
              textDecoration: "none"
            }}
            onClick={closeMobileMenu}
          >
            <span>Contact Us</span>
            <i className="rtmicon rtmicon-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;






 {/* Show first category items by default when nothing is hovered */}
              {/* {hoveredCategory === null && serviceCategories.length > 0 && (
                <div className="category-items-wrapper">
                  <div className="category-items">
                    {serviceCategories[0].items.map((item, i) => (
                      <Link 
                        to={item.link} 
                        key={i} 
                        className="category-item"
                        onClick={() => {
                          setActiveCategory(null);
                          setHoveredCategory(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}