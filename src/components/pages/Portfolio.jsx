import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../portfoliopagecomponent/HeroSection';

import TestimonialsSection from '../portfoliopagecomponent/TestimonialsSection';
import ProjectSection from '../portfoliopagecomponent/ProjectSection';

const Portfolio = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Creative Portfolio & Success Stories",
    "url": "https://yashikyadavandco.com/portfolio",
    "description": "Explore our portfolio of successful digital marketing campaigns and creative brand transformations that delivered exceptional results for our clients.",
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Yashik Yadav and Co Portfolio",
      "creator": {
        "@type": "Organization",
        "name": "Yashik Yadav and Co"
      }
    }
  };

  return (
   <>
      <Helmet>
        <title>Our Works Digital Marketing Success Stories - YY & Co</title>
        <meta name="description" content="
See how we delivers results! Explore our digital marketing success stories in SEO, social media, and lead generation for small businesses." />
        <meta name="keywords" content="portfolio, case studies, digital marketing success, brand transformation, social media campaigns" />
        <meta property="og:title" content="Our Works Digital Marketing Success Stories - YY & Co" />
        <meta property="og:description" content="
See how we delivers results! Explore our digital marketing success stories in SEO, social media, and lead generation for small businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/portfolio" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/portfolio/1.png" />
        <meta property="og:image:alt" content="Yashik Yadav and Co - Creative Portfolio & Success Stories" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yashik Yadav and Co - Creative Portfolio & Success Stories" />
        <meta name="twitter:description" content="Explore our portfolio of successful digital marketing campaigns and creative brand transformations that delivered exceptional results for our clients." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/portfolio/1.png" />
        <meta name="twitter:image:alt" content="Yashik Yadav and Co - Creative Portfolio & Success Stories" />
        <link rel="canonical" href="https://yashikyadavandco.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>
      <HeroSection />
      <ProjectSection />
      <TestimonialsSection />


  </>
  );
};

export default Portfolio;