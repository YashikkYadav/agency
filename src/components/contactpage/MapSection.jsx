import React from 'react';

const MapSection = () => {
  return (
    <>
      {/* <iframe loading="lazy" className="maps overflow-hidden rounded"
        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
        title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom">
      </iframe> */}

      <iframe
  loading="lazy"
  className="maps overflow-hidden rounded"
  src="https://maps.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&t=m&z=14&output=embed&iwloc=near"
  title="Yashik Yadav and Co, Jaipur, Rajasthan, India"
  aria-label="Yashik Yadav and Co, Jaipur, Rajasthan, India">
</iframe>

    </>
  );
};

export default MapSection;