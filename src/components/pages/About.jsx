import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../aboutPageComponents/HeroSection';
import MarqueeSection from '../aboutPageComponents/MarqueeSection';
import AboutUsSection from '../aboutPageComponents/AboutUsSection';
import WhyUsSection from '../aboutPageComponents/WhyUsSection';
import TextualShowcase from '../aboutPageComponents/TextualShowcase';
import TeamSection from '../aboutPageComponents/TeamSection';
import OurProcessSection from '../aboutPageComponents/OurProcessSection';
import OurAchievementSection from '../aboutPageComponents/OurAchievementSection';
import TestimonialsSection from '../aboutPageComponents/TestimonialsSection';
import CTASection from '../aboutPageComponents/CTASection';

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Yashik Yadav and Co",
    "url": "https://yashikyadavandco.com/about-us",
    "description": "Discover how Yashik Yadav and Co transforms brands through strategic social media management and creative marketing solutions. Learn about our mission, values, and expert team.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "description": "Creative brand building agency specializing in strategic social media management and digital marketing solutions for businesses seeking growth.",
      "foundingDate": "2025",
      "founder": {
        "@type": "Person",
        "name": "Yashik Yadav"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Top SEO & Social Media Marketing Agency – YY & Co
</title>
        <meta name="description" content="From clicks to clients! the top SEO & social media agency, boosts online visibility and growth for small businesses." />
        <meta name="keywords" content="about us, brand building agency, social media management, creative marketing, digital strategy, Yashik Yadav and Co" />
        <meta property="og:title" content="About Top SEO & Social Media Marketing Agency – YY & Co" />
        <meta property="og:description" content="about us, brand building agency, social media management, creative marketing, digital strategy, Yashik Yadav and Co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/about-us" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/aboutpage/2.jpeg" />
        <meta property="og:image:alt" content="About Yashik Yadav and Co - Creative Brand Building Agency" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Yashik Yadav and Co - Creative Brand Building Agency" />
        <meta name="twitter:description" content="Discover how Yashik Yadav and Co transforms brands through strategic social media management and creative marketing solutions. Learn about our mission, values, and expert team." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/aboutpage/2.jpeg" />
        <meta name="twitter:image:alt" content="About Yashik Yadav and Co - Creative Brand Building Agency" />
        <link rel="canonical" href="https://yashikyadavandco.com/about-us" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <WhyUsSection />
      <TextualShowcase />
      <TeamSection />
      <OurProcessSection />
      <OurAchievementSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default About;