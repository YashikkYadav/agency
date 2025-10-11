import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const notFoundSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found",
    "url": "https://yashikyadavandco.com/404",
    "description": "The page you're looking for doesn't exist. Return to our homepage or explore our digital marketing services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "url": "https://yashikyadavandco.com/"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Page Not Found - Yashik Yadav and Co</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our digital marketing services." />
        <meta property="og:title" content="Page Not Found - Yashik Yadav and Co" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to our homepage or explore our digital marketing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/404" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png" />
        <meta property="og:image:alt" content="Yashik Yadav and Co - Page Not Found" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found - Yashik Yadav and Co" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Return to our homepage or explore our digital marketing services." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png" />
        <meta name="twitter:image:alt" content="Yashik Yadav and Co - Page Not Found" />
        <link rel="canonical" href="https://yashikyadavandco.com/404" />
        <script type="application/ld+json">
          {JSON.stringify(notFoundSchema)}
        </script>
      </Helmet>
      {/* Hero */}
      <div className="section bg-image-404 pb-0">
        <div className="row row-cols-lg-3 row-cols-1">
          <div className="col mb-3">
            <img src="/image/icon 13.png" className="img-fluid" alt="Yashik Yadav and Co 404 page decoration" />
          </div>
          <div className="col mb-3">
            <div className="card-404">
              <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <h3 className="background-color w-75 scrollanimation animated zoomIn adr-9">
                  ...Oops 404!
                  Page Not Available
                </h3>
                <p className="background-color">
                  It seems you've reached a page that doesn't exist. Let's <br /> redirect you to the right path!
                </p>
              </div>
              <div className="d-flex flex-column gap-3 w-100">
                <Link to="/" className="btn btn-accent-4">
                  <span>Return to Homepage</span>
                  <i className="rtmicon rtmicon-arrow-up-right"></i>
                </Link>
                <Link to="/services" className="btn btn-accent-4">
                  <span>Discover Our Solutions</span>
                  <i className="rtmicon rtmicon-arrow-up-right"></i>
                </Link>
                <Link to="/contact-us" className="btn btn-accent-4">
                  <span>Get In Touch With Us</span>
                  <i className="rtmicon rtmicon-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <img src="/image/icon 13.png" className="img-fluid" alt="Yashik Yadav and Co 404 page decoration" />
          </div>
        </div>
      </div>
      {/* End Hero */}
    </div>
  );
};

export default NotFound;