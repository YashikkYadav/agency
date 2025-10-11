import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import HeroSection from '../servicePageComponents/HeroSection';
import ServicesSection from '../servicePageComponents/ServicesSection';
// import PricingSection from '../servicePageComponents/PricingSection';
import TestimonialsSection from '../servicePageComponents/TestimonialsSection';
import CTASection from '../servicePageComponents/CTASection';
import PricingSection from '../homeComponents/PricingSection';

const Services = () => {
  const { hash } = useLocation();
  
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing & Social Media Services",
    "provider": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "url": "https://yashikyadavandco.com/"
    },
    "description": "Comprehensive digital marketing services including social media management, brand strategy, content creation, and paid advertising to grow your business online.",
    "serviceType": [
      "Social Media Management",
      "Brand Strategy",
      "Content Creation",
      "Paid Advertising",
      "SEO Optimization"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    }
  };

  // Scroll to section when component mounts and hash is present
  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div >
      <Helmet>
        <title>Digital Marketing Services SEO, Social Media & More - YY & Co. </title>
        <meta name="description" content="Complete digital marketing services - SEO, social media, PPC, branding & more - to boost visibility, leads & growth for your business." />
        <meta name="keywords" content="digital marketing services, social media management, brand strategy, content creation, paid advertising, SEO optimization" />
        <meta property="og:title" content="Digital Marketing Services SEO, Social Media & More - YY & Co." />
        <meta property="og:description" content="Complete digital marketing services - SEO, social media, PPC, branding & more - to boost visibility, leads & growth for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/services" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/servicespage/1.jpeg" />
        <meta property="og:image:alt" content="Yashik Yadav and Co - Digital Marketing & Social Media Services" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yashik Yadav and Co - Digital Marketing & Social Media Services" />
        <meta name="twitter:description" content="Comprehensive digital marketing services including social media management, brand strategy, content creation, and paid advertising to grow your business online." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/servicespage/1.jpeg" />
        <meta name="twitter:image:alt" content="Yashik Yadav and Co - Digital Marketing & Social Media Services" />
        <link rel="canonical" href="https://yashikyadavandco.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>
      <HeroSection />
      <ServicesSection />
      {/* <PricingSection /> */}
      <PricingSection/>
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Services;