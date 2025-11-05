import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
// import Header2 from "./Header2";
const Layout = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yashik Yadav and Co",
    url: "https://yashikyadavandco.com/",
    logo: "https://yashikyadavandco.com/image/Black_Brandmark_Agency.png",
    description:
      "Creative brand building agency specializing in strategic social media management and digital marketing solutions for businesses seeking growth.",
    sameAs: [
      "https://www.facebook.com/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL/people/Yashik-Yadav-Co/61572228571839/?mibextid=ZbWKwL",
      "https://www.instagram.com/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D/yashikyadavandco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      "https://x.com/Yashikyadavco?t=w7FhISNj7W-baBQL_dM28g&s=09",
      "https://www.youtube.com/channel/UC3qcrtRPd8bpvV0hvm_6BnA",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9887119749",
      contactType: "Customer Service",
      email: "info@yashikyadavandco.com",
    },
  };

  return (
    <>
      <Helmet>
        <title>Yashik Yadav and Co - Creative Brand Building Agency</title>
        <meta
          name="description"
          content="Yashik Yadav and Co specializes in creative brand building, strategic social media management, and digital marketing solutions for businesses seeking growth."
        />
        <meta
          name="keywords"
          content="brand building, social media management, digital marketing, creative agency, content strategy, SEO optimization"
        />
        <meta
          property="og:title"
          content="Yashik Yadav and Co - Creative Brand Building Agency"
        />
        <meta
          property="og:description"
          content="Yashik Yadav and Co specializes in creative brand building, strategic social media management, and digital marketing solutions for businesses seeking growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yashikyadavandco.com/" />
        <meta
          property="og:image"
          content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png"
        />
        <meta
          property="og:image:alt"
          content="Yashik Yadav and Co - Creative Brand Building Agency"
        />
        <meta property="og:site_name" content="Yashik Yadav and Co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Yashik Yadav and Co - Creative Brand Building Agency"
        />
        <meta
          name="twitter:description"
          content="Yashik Yadav and Co specializes in creative brand building, strategic social media management, and digital marketing solutions for businesses seeking growth."
        />
        <meta
          name="twitter:image"
          content="https://yashikyadavandco.com/image/Black_Brandmark_Agency.png"
        />
        <meta
          name="twitter:image:alt"
          content="Yashik Yadav and Co - Creative Brand Building Agency"
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      {/* <Header /> */}
      <Header2 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
