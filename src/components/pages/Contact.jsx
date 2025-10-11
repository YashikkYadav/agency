import { Helmet } from "react-helmet";
import ContactSection from "../contactpage/ContactSection";
import CTASection from "../contactpage/CTASection";
import HeroSection from "../contactpage/HeroSection";
import MapSection from "../contactpage/MapSection";


const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Yashik Yadav and Co",
    "url": "https://yashikyadavandco.com/contact-us",
    "description": "Get in touch with Yashik Yadav and Co for expert digital marketing, social media management, and brand building services. Let's discuss your business growth.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Yashik Yadav and Co",
      "url": "https://yashikyadavandco.com/",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9887119749",
        "contactType": "Customer Service",
        "email": "info@yashikyadavandco.com",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302020",
        "addressCountry": "IN"
      }
    }
  };

  return (
     <>
      <Helmet>
        <title>Contact Digital Marketing, Social Media, SEO Agency - YY & Co.</title>
        <meta name="description" content="Reach out to the best digital marketing, social media, SEO agency helping small businesses grow with expert SEO, social, and marketing solutions." />
        <meta name="keywords" content="contact, digital marketing, social media management, brand building, consultation" />
        <meta property="og:title" content="Contact Digital Marketing, Social Media, SEO Agency - YY & Co." />
        <meta property="og:description" content="Reach out to the best digital marketing, social media, SEO agency helping small businesses grow with expert SEO, social, and marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/contact-us" />
        <meta property="og:image" content="https://yashikyadavandco.com/image/contact/1.jpeg" />
        <meta property="og:image:alt" content="Contact Yashik Yadav and Co - Digital Marketing Experts" />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Yashik Yadav and Co - Digital Marketing Experts" />
        <meta name="twitter:description" content="Get in touch with Yashik Yadav and Co for expert digital marketing, social media management, and brand building services. Let's discuss your business growth." />
        <meta name="twitter:image" content="https://yashikyadavandco.com/image/contact/1.jpeg" />
        <meta name="twitter:image:alt" content="Contact Yashik Yadav and Co - Digital Marketing Experts" />
        <link rel="canonical" href="https://yashikyadavandco.com/contact-us" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <HeroSection />
      <ContactSection />
      <MapSection />
      <CTASection />
     
     
     </>
  );
};

export default Contact;