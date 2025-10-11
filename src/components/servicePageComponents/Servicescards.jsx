import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { serviceCategories } from "../../assets/data/serviceCategories";
import * as Icons from 'react-icons/fa';

export default function ServicesSection() {
  const { hash } = useLocation();

  // Function to render the correct icon component
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (IconComponent) {
      return <IconComponent style={{ fontSize: "40px" }} />;
    }
    return null;
  };

  // Scroll to section when hash changes
  useEffect(() => {
    if (hash) {
      // Remove the # from the hash
      const sectionId = hash.replace('#', '');
      
      // Find the element with the matching ID
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center min-vh-100" >
      {serviceCategories.map((category, index) => {
        // Create a URL-friendly version of the category title for the ID
        const categoryId = category.title.toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={index} id={categoryId} className="mb-5 w-100">
            {/* Section Heading */}
              <h3 className=" mb-4 fw-bold fst-italic scrollanimation animated fadeInDown adr-9" style={{position:"relative" ,left:"-8px"}}>{category.title}</h3>
            
              <div style={{position:"absolute", top:`${20*index}%`, left:`${2*index}%`, transform:"translate(-50%, -50%)", zIndex:"-1"}}>
                <img src={`/image/icon ${index}.png`} alt=" icons" />
              </div>

            {/* Service Cards (2 per row on lg, 1 on mobile) */}
            <div className="d-flex flex-column align-items-center gap-3 w-100">
              {category.items.reduce((rows, item, i) => {
                if (i % 2 === 0) rows.push([item]);
                else rows[rows.length - 1].push(item);
                return rows;
              }, []).map((row, rIndex) => (
                <div key={rIndex} className="d-flex flex-lg-row flex-column gap-3 justify-content-center w-100">
                  {row.map((item, i) => (
                    <a key={i} href={item.link} className="card-service flex-fill p-3" style={{ borderRadius: "10px", maxWidth: "400px" }}>
                      <h5>{item.name}</h5>
                      <div className="d-flex flex-row align-items-center gap-3">
                        {renderIcon(item.icon)}
                        <p className="m-0" style={{ maxWidth: "70%" }}>
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}