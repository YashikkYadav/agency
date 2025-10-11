import React from 'react';

const PricingSection = () => {
  return (
    <>
      {/* Pricing Plan */}
      <div className="section position-relative">
        <div className="r-container">
          <div className="d-flex flex-column align-items-center gap-5">
            <div className="d-flex flex-column align-items-center gap-3">
              <div className="border-bottom border-4 border-accent scrollanimation animated fadeInDown adr-9 adl-2"
                style={{ width: '100px' }}></div>
              <h3 className="text-center scrollanimation animated fadeInDown adr-9" style={{ maxWidth: '60%' }}>
                Pricing Plan - Flexible Packages for Your Needs
              </h3>
              <div className="sub-heading text-accent second position-absolute" style={{ zIndex: -1, top: '-3%' }}>
                PRICING PLAN
              </div>
            </div>

            {/* Tab Navigation */}
            <div id="tab-duration" className="tab-container d-flex flex-row align-items-center gap-3">
              <div className="tab active" id="tab-monthly" data-duration="monthly">Monthly
              </div>
              <div className="tab" id="tab-yearly" data-duration="yearly">Yearly</div>
            </div>

            {/* Card Container */}
            <div className="row row-cols-xl-3 row-cols-1 align-items-center w-100">
              <div className="col mb-xl-0 mb-3">
                <div className="card-pricing class-duration" data-duration="monthly">
                  <div className="d-flex flex-column gap-3">
                    <h4>Starter Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$99</div>
                      <span className="align-self-end">per month</span>
                    </div>
                    <p>For Small Businesses & Beginners</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Basic social media management</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">12 posts/month </p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Hashtag & trend research</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Monthly performance report</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-xl-0 mb-3">
                <div className="card-pricing bg-accent-color-4 class-duration" data-duration="monthly">
                  <div className="d-flex flex-column gap-3">
                    <div className="ribbon">
                      <span>Popular</span>
                    </div>
                    <h4>Pro Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$299</div>
                      <span className="align-self-end">per month</span>
                    </div>
                    <p>Full Service for Maximum Growth</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Everything in Growth Plan</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">30 posts/month</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Advanced ad campaign</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Weekly performance report</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Target audience analysis</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Monthly budget review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-xl-0 mb-3">
                <div className="card-pricing class-duration" data-duration="monthly">
                  <div className="d-flex flex-column gap-3">
                    <h4>Growth Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$199</div>
                      <span className="align-self-end">per month</span>
                    </div>
                    <p>For Businesses Ready to Scale</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Everything in Starter Plan</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">20 posts/month</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Engagement management</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Bi-weekly performance report</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-pricing class-duration" data-duration="yearly">
                  <div className="d-flex flex-column gap-3">
                    <h4>Starter Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$75</div>
                      <span className="align-self-end">per yearly</span>
                    </div>
                    <p>For Small Businesses & Beginners</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Basic social media management</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">12 posts/month </p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Hashtag & trend research</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Monthly performance report</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-pricing bg-accent-color-4 class-duration" data-duration="yearly">
                  <div className="d-flex flex-column gap-3">
                    <div className="ribbon">
                      <span>Popular</span>
                    </div>
                    <h4>Pro Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$250</div>
                      <span className="align-self-end">per yearly</span>
                    </div>
                    <p>Full Service for Maximum Growth</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Everything in Growth Plan</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">30 posts/month</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Advanced ad campaign</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Weekly performance report</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Target audience analysis</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Monthly budget review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-pricing class-duration" data-duration="yearly">
                  <div className="d-flex flex-column gap-3">
                    <h4>Growth Plan</h4>
                    <div className="d-flex flex-row">
                      <div className="price-text">$150</div>
                      <span className="align-self-end">per yearly</span>
                    </div>
                    <p>For Businesses Ready to Scale</p>
                  </div>
                  <div className="w-100">
                    <a href="/pricing-plan" className="btn btn-accent-3">
                      Choose Plan
                    </a>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h6>FEATURES</h6>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Everything in Starter Plan</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">20 posts/month</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Engagement management</p>
                    </div>
                    <div className="card-pricing-detail">
                      <i className="rtmicon rtmicon-check"></i>
                      <p className="m-0">Bi-weekly performance report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Pricing Plan */}
    </>
  );
};

export default PricingSection;