import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeroSection from '../servicedetailpagecomponent/HeroSection';
import ServicesDetailSection from '../servicedetailpagecomponent/ServicesDetailSection';
import { serviceDetails } from '../../assets/data/serviceDetails';

const ServicesDetail = () => {
  const { serviceId } = useParams();
  
  // Find the service detail based on the route parameter
  // First try to find by ID, then by title (converted to URL-friendly format)
  const serviceDetail = serviceDetails.find(service => 
    service.id === serviceId || 
    service.title.toLowerCase().replace(/\s+/g, '-') === serviceId ||
    service.id === serviceId.replace(/\s+/g, '-')
  );

  // Scroll to top when component mounts (when navigating to a new service page)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // If service not found, you might want to show a 404 or default content
  if (!serviceDetail) {
    return (
      <div>
        <Helmet>
          <title>Service Not Found - Yashik Yadav and Co</title>
          <meta name="description" content="The requested service could not be found." />
        </Helmet>
        <div className="section">
          <div className="r-container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
              <h2>Service Not Found</h2>
              <p>The requested service could not be found.</p>
              <a href="/services" className="btn btn-accent mt-3">View All Services</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const serviceDetailSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceDetail.title,
    "provider": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "url": "https://yashikyadavandco.com/"
    },
    "description": serviceDetail.description,
    "serviceType": serviceDetail.category,
    "category": "Digital Marketing Services",
    "audience": {
      "@type": "BusinessAudience",
      "name": "Businesses seeking digital growth"
    },
    "offers": {
      "@type": "Offer",
      "category": "Service",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": false
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${serviceDetail.metaTitle}`}</title>
        <meta name="description" content={serviceDetail.metaDescription} />
        <meta name="keywords" content={`${serviceDetail.title.toLowerCase()}, ${serviceDetail.category.toLowerCase()}, digital marketing, yashik yadav and co`} />
        <meta property="og:title" content={`${serviceDetail.metaTitle}`} />
        <meta property="og:description" content={serviceDetail.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yashikyadavandco.com/services/${serviceId}`} />
        <meta property="og:image" content={serviceDetail.image || "https://yashikyadavandco.com/image/servicedetail/default.jpg"} />
        <meta property="og:image:alt" content={`Yashik Yadav and Co - ${serviceDetail.title}`} />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Yashik Yadav and Co - ${serviceDetail.title}`} />
        <meta name="twitter:description" content={serviceDetail.description} />
        <meta name="twitter:image" content={serviceDetail.image || "https://yashikyadavandco.com/image/servicedetail/default.jpg"} />
        <meta name="twitter:image:alt" content={`Yashik Yadav and Co - ${serviceDetail.title}`} />
        <link rel="canonical" href={`https://yashikyadavandco.com/services/${serviceId}`} />
        <script type="application/ld+json">
          {JSON.stringify(serviceDetailSchema)}
        </script>
      </Helmet>
      <HeroSection 
        title={serviceDetail.title}
        description={serviceDetail.description}
        icon={serviceDetail.icon}
      />
      
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 gap-5">
            <div className="col col-xl-7 mb-3">
              <div className="d-flex flex-column gap-3">
                <div className="position-relative">
                  <img 
                    src={serviceDetail.image || "/image/aboutpage/6.png"} 
                    className="img-fluid" 
                    alt={`Yashik Yadav and Co ${serviceDetail.title} service`}
                    style={{ aspectRatio: '16/9' }} 
                  />
                  {/* <button type="button" className="request-loader"  data-bs-target="#e119">
                    <i className="rtmicon rtmicon-play ms-1" aria-hidden="true"></i>
                  </button> */}
                </div>
                <h4 className="scrollanimation animated fadeInDown adr-9 adl-2">{serviceDetail.title}</h4>
                <p>
                  {serviceDetail.longDescription}
                </p>
                <h6 className="fst-italic border-start border-3 border-accent ps-2 ms-5">
                  "{serviceDetail.description}"
                </h6>
                <p className="m-0">
                  We conduct in-depth analysis to identify the most impactful strategies for your specific needs.
                  Instead of relying on generic approaches, we utilize research-driven techniques to boost
                  visibility and audience discovery. This targeted approach helps your content surface in relevant
                  searches and trending discussions, generating organic growth.
                </p>
                <hr className="text-color-2" />
                <h5 className="scrollanimation animated fadeInDown adr-9">Key Benefits:</h5>
                <div className="d-flex flex-row gap-3">
                  <p style={{ maxWidth: '55%' }}>
                    Our service provides comprehensive benefits tailored to your business objectives.
                    We help you leverage optimal opportunities for growth and visibility in your industry.
                  </p>
                  <div className="d-flex flex-column gap-1">
                    {serviceDetail.benefits && serviceDetail.benefits.map((benefit, index) => (
                      <div className="category" key={index}>
                        <i className="rtmicon rtmicon-arrow-up-right accent-color"></i>
                        <span className="button text-color">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <h5 className="scrollanimation animated fadeInDown adr-9 mt-4">Our Process:</h5>
                <div className="d-flex flex-column gap-2">
                  {serviceDetail.process && serviceDetail.process.map((step, index) => (
                    <div className="d-flex flex-row align-items-center gap-3" key={index}>
                      <div className="bg-accent-color" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-dark">{index + 1}</span>
                      </div>
                      <p className="m-0">{step}</p>
                    </div>
                  ))}
                </div>
                <hr className="text-color-2" />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <p>Share Via:</p>
                <div className="social-icons row">
               <a href="https://www.facebook.com" aria-label="Follow us on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com" aria-label="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com" aria-label="Follow us on Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com" aria-label="Follow us on YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
              </div>
            </div>
            <div className="col col-xl-4 mb-3">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-4">
                  <h4 className="fw-normal scrollanimation animated fadeInDown adr-9">Related Services</h4>
                  {serviceDetail.relatedServices && serviceDetail.relatedServices.map((relatedService, index) => {
                    // Check if relatedService is an object (new format) or string (old format)
                    if (typeof relatedService === 'object' && relatedService.service) {
                      // New format: { service: "Service Name", to: "/services/service-id" }
                      return (
                        <div className="category" key={index}>
                          <i className="rtmicon rtmicon-arrow-up-right"></i>
                          <Link 
                            to={relatedService.to} 
                            className="button text-color"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {relatedService.service}
                          </Link>
                        </div>
                      );
                    } else {
                      // Old format: "Service Name"
                      // Find the related service in our data to get its link
                      const related = serviceDetails.find(service => service.title === relatedService);
                      return (
                        <div className="category" key={index}>
                          <i className="rtmicon rtmicon-arrow-up-right"></i>
                          <Link 
                            to={`/services/${related?.id}`} 
                            className="button text-color"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {relatedService}
                          </Link>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="d-flex flex-column gap-4">
                  <h4 className="scrollanimation animated fadeInDown adr-9 adl-1">Require Professional Support?</h4>
                  <p style={{ maxWidth: '80%' }}>
                    Have inquiries about our offerings? Our specialists are prepared to support you. Reach out to
                    us for expert consultation and guidance.
                  </p>
                  <div className="w-max-content">
                    <a className="btn btn-accent d-flex flex-row gap-3" href="/contact-us">
                      <span>Connect With Our Team</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="e119" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-dark-color">
              {/* <iframe className="ifr-video" src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;