import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
// Lazy load pages

const About = lazy(() => import("./components/pages/About"));
const Services = lazy(() => import("./components/pages/Services"));
const ServicesDetail = lazy(() => import("./components/pages/ServicesDetail"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Portfolio = lazy(() => import("./components/pages/Portfolio"));
const PortfolioDetail = lazy(() =>
  import("./components/pages/PortfolioDetail")
);
const Team = lazy(() => import("./components/pages/Team"));
const Pricing = lazy(() => import("./components/pages/Pricing"));
const Blog = lazy(() => import("./components/pages/Blog"));
const SinglePost = lazy(() => import("./components/pages/SinglePost"));
const FAQs = lazy(() => import("./components/pages/FAQs"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
 useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Automatically zoom out to mimic desktop view
      document.body.style.zoom = "100%";
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="services/:serviceId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ServicesDetail />
              </Suspense>
            }
          />
          <Route
            path="services-detail"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ServicesDetail />
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="portfolio-detail"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PortfolioDetail />
              </Suspense>
            }
          />
          <Route
            path="portfolio-detail/:projectName"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PortfolioDetail />
              </Suspense>
            }
          />
          {/* <Route
            path="team"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Team />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="pricing-plan"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Pricing />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="blog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="single-post"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SinglePost />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="faqs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FAQs />
              </Suspense>
            }
          /> */}
          <Route
            path="404"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
