import React from 'react';
import { Helmet } from 'react-helmet';

const FAQsSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Yashik Yadav & Co. different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a full-stack digital growth agency, combining branding, web/app development, marketing, and SEO under one roof. Our focus is on building strong, scalable brands, driving measurable results, and delivering end-to-end solutions that grow your business globally."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer international and multilingual services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. From international SEO to multilingual website development and global marketing campaigns, we help brands expand across countries, reach the right audiences, and dominate search engines worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success across different services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Success is measured through custom KPIs for each service — SEO, branding, development, and marketing. We track traffic growth, conversions, engagement, ROI, brand reach, and user experience improvements using detailed dashboards and reports."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with branding and creative strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We create compelling brand identities, visual storytelling, and brand messaging that resonate with your audience. Our approach ensures your brand stands out, builds trust, and drives long-term loyalty."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide marketing campaigns beyond SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our team runs data-driven campaigns across social media, paid ads, email marketing, and content marketing. Every campaign is strategically optimized to maximize engagement, leads, and revenue."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer web and app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design and develop high-performance websites and mobile apps with a focus on UX/UI, scalability, and conversion optimization. Every project is crafted to support marketing and branding efforts for measurable business growth."
        }
      }
    ]
  };

  return (
    <div className="section position-relative">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className=" flex ">
        
        <div className="d-flex flex-column align-items-center gap-5">
          <div className="sub-heading text-accent second position-absolute" style={{ zIndex: -1, top: '-5%' }}>
            FAQ'S
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="border-bottom border-4 border-accent scrollanimation animated fadeInDown adr-9 adl-2"
              style={{ width: '100px' }}></div>
            <h3 className="scrollanimation animated fadeInDown adr-9">
              Your Questions, Answered
            </h3>
          </div>
          <div className="d-flex flex-column gap-3 w-75">
            <div className="accordion d-flex flex-column gap-4" id="faqAccordion1">
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                    - What makes Yashik Yadav & Co. different from other agencies?
                  </button>
                </div>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                   We are a full-stack digital growth agency, combining branding, web/app development, marketing, and SEO under one roof. Our focus is on building strong, scalable brands, driving measurable results, and delivering end-to-end solutions that grow your business globally.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                    - Do you offer international and multilingual services?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                   Absolutely. From international SEO to multilingual website development and global marketing campaigns, we help brands expand across countries, reach the right audiences, and dominate search engines worldwide.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    - How do you measure success across different services?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Success is measured through custom KPIs for each service — SEO, branding, development, and marketing. We track traffic growth, conversions, engagement, ROI, brand reach, and user experience improvements using detailed dashboards and reports.
                  </div>
                </div>
              </div>



               <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                    - Can you help with branding and creative strategy?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Yes. We create compelling brand identities, visual storytelling, and brand messaging that resonate with your audience. Our approach ensures your brand stands out, builds trust, and drives long-term loyalty.
                  </div>
                </div>
              </div>





               <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                    - Do you provide marketing campaigns beyond SEO?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Absolutely. Our team runs data-driven campaigns across social media, paid ads, email marketing, and content marketing. Every campaign is strategically optimized to maximize engagement, leads, and revenue.
                  </div>
                </div>
              </div>






               <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                    - Do you offer web and app development services?
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Yes, we design and develop high-performance websites and mobile apps with a focus on UX/UI, scalability, and conversion optimization. Every project is crafted to support marketing and branding efforts for measurable business growth.
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;