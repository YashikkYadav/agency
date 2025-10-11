import React from 'react';

const OurAchievementSection = () => {
  return (
    <div className="section">
      <div className="r-container">
        <div className="d-flex flex-column gap-3">
          <h2 className="text-center scrollanimation animated fadeInDown adr-9">Our Industry Recognition</h2>
          <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between gap-5">
            <div className="bg-accent-color text-center p-5 rounded-3">
              <h6 className="background-color fw-bold">2025 Digital Marketing Excellence Award</h6>
              <div className="small-text background-color">
                Recognized for our innovative approach and outstanding success <br /> in the digital marketing industry.
              </div>
            </div>
            <img src="/image/certificate 1.png" className="img-fluid" alt="2025 Digital Marketing Excellence Award Certificate - Yashik Yadav and Co" />
            <img src="/image/certificate 2.png" className="img-fluid" alt="Industry Recognition Certificate - Yashik Yadav and Co" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievementSection;