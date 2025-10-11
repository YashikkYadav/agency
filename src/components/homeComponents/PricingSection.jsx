import React, { useState } from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="section position-relative home-section">
      <div className="r-container">
        <div className="d-flex flex-column align-items-center gap-5">
          {/* Heading */}
          <div className="d-flex flex-column align-items-center gap-3">
            <div
              className="border-bottom border-4 border-accent scrollanimation animated fadeInDown adr-9 adl-2"
              style={{ width: "100px" }}
            ></div>
            <h3
              className="text-center scrollanimation animated fadeInDown adr-9"
              style={{ maxWidth: "60%" }}
            >
              Pricing Plan - Flexible Packages for Your Needs
            </h3>
            <div
              className="sub-heading text-accent second position-absolute home-subheading"
              style={{ zIndex: -1, top: "-3%" }}
            >
              PRICING PLAN
            </div>
          </div>

          {/* Tab Navigation */}
          <div
            id="tab-duration"
            className="tab-container d-flex flex-row align-items-center gap-3"
          >
            <div
              className={`tab ${plan === "monthly" ? "active" : ""}`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </div>
            <div
              className={`tab ${plan === "yearly" ? "active" : ""}`}
              onClick={() => setPlan("yearly")}
            >
              Yearly
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="row row-cols-xl-3 row-cols-1 align-items-center w-100">
            {/* Starter Plan */}
            <div className="col mb-xl-0 mb-3">
              <div className="card-pricing">
                <div className="d-flex flex-column gap-3">
                  <h4>Starter Plan</h4>
                  <div className="d-flex flex-row align-items-end gap-2">
                    <div className="price-text home-price-text">
                      ${plan === "monthly" ? 999 : 9990}
                    </div>
                    <span>per {plan === "monthly" ? "month" : "year"}</span>
                  </div>
                  <p>For Small Businesses & Beginners</p>
                </div>

                <div className="w-100">
                  <Link to="/pricing-plan" className="btn btn-accent-3">
                    Choose Plan
                  </Link>
                </div>

                <div className="d-flex flex-column gap-3">
                  <h6>FEATURES</h6>
                  {[
                    "Keyword Research & On-Page SEO",
                    "Monthly Reporting",
                    "Technical Fixes (basic)",
                  ].map((feature, i) => (
                    <div key={i} className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="col mb-xl-0 mb-3">
              <div className="card-pricing bg-accent-color-4">
                <div className="d-flex flex-column gap-3">
                  <div className="ribbon">
                    <span>Popular</span>
                  </div>
                  <h4>Pro Plan</h4>
                  <div className="d-flex flex-row align-items-end gap-2">
                    <div className="price-text home-price-text">Custom Pricing</div>
                  </div>
                  <p>Full Service for Maximum Growth</p>
                </div>

                <div className="w-100">
                  <Link to="/pricing-plan" className="btn btn-accent-3">
                    Choose Plan
                  </Link>
                </div>

                <div className="d-flex flex-column gap-3">
                  <h6>FEATURES</h6>
                  {[
                    "Everything in Growth Plan",
                    "International SEO",
                    "Full-Funnel SEO + PPC Integration",
                    "Dedicated Account Manager",
                    "Target Audience Analysis",
                    "Advanced Analytics Dashboards",
                  ].map((feature, i) => (
                    <div key={i} className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="col mb-xl-0 mb-3">
              <div className="card-pricing">
                <div className="d-flex flex-column gap-3">
                  <h4>Growth Plan</h4>
                  <div className="d-flex flex-row align-items-end gap-2">
                    <div className="price-text home-price-text">
                      ${plan === "monthly" ? 1999 : 19990}
                    </div>
                    <span>per {plan === "monthly" ? "month" : "year"}</span>
                  </div>
                  <p>For Businesses Ready to Scale</p>
                </div>

                <div className="w-100">
                  <Link to="/pricing-plan" className="btn btn-accent-3">
                    Choose Plan
                  </Link>
                </div>

                <div className="d-flex flex-column gap-3">
                  <h6>FEATURES</h6>
                  {[
                    "Technical SEO Audit + Fixes",
                    "Content Strategy + Optimization",
                    "Link Building (10–15 links/month)",
                    "E-commerce SEO / SaaS SEO",
                  ].map((feature, i) => (
                    <div key={i} className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End Pricing Cards */}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;