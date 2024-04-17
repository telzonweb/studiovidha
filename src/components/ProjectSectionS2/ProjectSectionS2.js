import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../Constant";

const ProjectSectionS2 = (props) => {
  const [portfolioData, setPortfolioData] = useState([]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getPortfolio() {
      const res = await fetch(`${BASEURL}/api/post/getposts?category=portfolio`);
      const data = await res.json();
      setPortfolioData(data.posts);
    }
    getPortfolio();
  }, []);

  return (
    <section className="apartment-section s2 text-center">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Choose an <span className="thin">Apartment</span>
          </h2>
          <p>At vero eos et accusamus et iusto odio</p>
        </div>
        <div className="apartment-carousel">
          <div className="row">
            {/* Map through portfolio data */}
            {portfolioData.map((portfolio) => (
              <div key={portfolio._id} className="col-lg-6 col-md-6 mb-4">
                <Link to={portfolio.slug}>
                  <div>
                    <img src={portfolio.image} alt="Description of the image" />
                    <h3 className="pt-4">{portfolio.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionS2;
