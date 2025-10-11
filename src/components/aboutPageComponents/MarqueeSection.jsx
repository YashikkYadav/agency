import React, { useEffect } from 'react';

const MarqueeSection = () => {
  useEffect(() => {
    // Initialize marquee animation when component mounts
    const initMarquee = () => {
      const marqueeContainers = document.querySelectorAll('.marquee-container');
      
      marqueeContainers.forEach(cont => {
        // Clear any existing clones to prevent duplication
        const existingClones = cont.querySelectorAll('.marquee-content:not(:first-child)');
        existingClones.forEach(clone => clone.remove());
        
        // Clone the content for infinite scrolling effect
        const content = cont.querySelector('.marquee-content');
        if (content) {
          const clone = content.cloneNode(true);
          const clone2 = content.cloneNode(true);
          cont.appendChild(clone);
          cont.appendChild(clone2);
          
          // Add marquee class to cloned content
          cont.querySelectorAll('.marquee-content').forEach(el => {
            el.classList.add('marquee');
          });
        }
      });
    };
    
    // Run initialization
    initMarquee();
    
    // Cleanup function to remove clones when component unmounts
    return () => {
      const marqueeContainers = document.querySelectorAll('.marquee-container');
      marqueeContainers.forEach(cont => {
        const contentElements = cont.querySelectorAll('.marquee-content');
        // Keep the first one (original) and remove clones
        for (let i = 1; i < contentElements.length; i++) {
          contentElements[i].remove();
        }
      });
    };
  }, []);

  return (
    <div
      className="d-flex flex-column gap-3 text-center align-items-center justify-content-center mx-auto mt-xl-5 position-relative accent-primary">
      <div className="marquee-container first bg-accent-color"
        style={{ transform: 'rotate(6deg)', position: 'absolute', marginBlock: '10rem', zIndex: 1 }}>
        <div className="marquee-content">
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 1.png" className="img-fluid" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 2.png" className="img-fluid" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 3.png" className="img-fluid" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 4.png" className="img-fluid" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 5.png" className="img-fluid" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 6.png" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 7.png" alt="Yashik Yadav and Co trusted partner brand" />
          </div>
        </div>
      </div>
      <div className="marquee-container reverse bg-accent-color-3" style={{ marginBlock: '10rem' }}>
        <div className="marquee-content">
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 1.png" className="img-fluid" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 2.png" className="img-fluid" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 3.png" className="img-fluid" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 4.png" className="img-fluid" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 5.png" className="img-fluid" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner black 6.png" alt="Yashik Yadav and Co industry partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner black 7.png" alt="Yashik Yadav and Co industry partner brand" />
          </div>
        </div>
      </div>
      <div className="marquee-container third reverse bg-accent-color-4 m-5"
        style={{ transform: 'rotate(-6deg)', position: 'absolute', marginBlock: '6rem', zIndex: 1 }}>
        <div className="marquee-content">
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner white 1.png" className="img-fluid" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner white 2.png" className="img-fluid" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner white 3.png" className="img-fluid" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner white 4.png" className="img-fluid" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner white 5.png" className="img-fluid" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center">
            <img src="/image/partner white 6.png" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
          <div className="marquee-item py-2 d-flex align-items-center justify-content-center">
            <img src="/image/partner white 7.png" alt="Yashik Yadav and Co collaborating partner brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;