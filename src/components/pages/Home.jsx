import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../homeComponents/HeroSection';

import AboutSection from '../homeComponents/AboutSection';
import ServicesSection from '../homeComponents/ServicesSection';
import TextualShowcase from '../homeComponents/TextualShowcase';
import PortfolioSection from '../homeComponents/PortfolioSection';
import WhyChooseUsSection from '../homeComponents/WhyChooseUsSection';
import PricingSection from '../homeComponents/PricingSection';
import TestimonialsSection from '../homeComponents/TestimonialsSection';
import FAQsSection from '../homeComponents/FAQsSection';
import BlogSection from '../homeComponents/BlogSection';
import MarqueeSection from '../aboutPageComponents/MarqueeSection';

// Import the responsive CSS file
// import './home-responsive.css';
import CTASection from '../aboutPageComponents/CTASection';

const Home = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yashik Yadav and Co",
    "url": "https://yashikyadavandco.com/",
    "description": "Creative brand building agency specializing in strategic social media management and digital marketing solutions for businesses seeking growth.",
    "publisher": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yashikyadavandco.com/image/Black_Brandmark_Agency.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Top Digital Marketing & Social Media Agency - YY& Co.</title>
        <meta name="title" content="Top Digital Marketing & Social Media Agency - YY& Co." />
        <meta name="description" content="Get noticed online! Top digital marketing & social media agency boosting small business growth through SEO, social media & lead generation." />
        <meta name="keywords" content="best digital marketing agency​,top digital marketing agencies,digital marketing agency for small businesses​,social media marketing agency,top seo agency" />
        <meta property="og:title" content="Top Digital Marketing & Social Media Agency - YY& Co." />
        <meta property="og:description" content="Get noticed online! Top digital marketing & social media agency boosting small business growth through SEO, social media & lead generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png" />
        <meta property="og:image:alt" content="Yashik Yadav and Co - Brand Building & Social Media Agency" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yashik Yadav and Co - Brand Building & Social Media Agency" />
        <meta name="twitter:description" content="Transform your brand with Yashik Yadav and Co's expert social media management and digital marketing solutions for business growth." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png" />
        <meta name="twitter:image:alt" content="Yashik Yadav and Co - Brand Building & Social Media Agency" />
        <link rel="canonical" href="https://yashikyadavandco.com/" />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <TextualShowcase />
      <PortfolioSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <FAQsSection />
      <BlogSection />
    </>
  );
};

export default Home;