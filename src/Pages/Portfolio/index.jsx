import React from "react";
import { portfolio } from "../../data";
import { PortfolioItem } from "../../Components";
import "./Style.css";
const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item, index) => {
          return <PortfolioItem key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;