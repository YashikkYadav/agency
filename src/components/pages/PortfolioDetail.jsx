import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PortfolioDetailHeroSection from '../portfoliodetailpagecomponents/PortfolioDetailHeroSection';
import PortfolioDetailSection from '../portfoliodetailpagecomponents/PortfolioDetailSection';
import { portfolioItems } from '../../assets/data/portfolioItems';

const PortfolioDetail = () => {
  const { projectName } = useParams();
  
  // Find the portfolio item based on the project name
  const portfolioItem = portfolioItems.find(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === projectName?.toLowerCase()
  );

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://yashikyadavandco.com/portfolio-detail" />
      </Helmet>
      <PortfolioDetailHeroSection portfolioItem={portfolioItem} />
      <PortfolioDetailSection portfolioItem={portfolioItem} />
    </div>
  );
};

export default PortfolioDetail;