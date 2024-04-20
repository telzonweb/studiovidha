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
      const res = await fetch(
        `${BASEURL}/api/post/getposts?category=portfolio`
      );
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
            Our <span className="thin">Portfolio</span>
          </h2>
          <p>Checkout our Astounding work</p>
        </div>
        <div className="apartment-carousel">
          <div className="row">
            {/* Map through portfolio data */}
            {portfolioData.map((portfolio) => (
              <div key={portfolio._id} className="col-lg-6 col-md-6 mb-4">
                <div>
                  <Link to={portfolio.slug}>
                    <div className="blog-item border rounded shadow pb-5">
                      <img
                        src={portfolio.image}
                        height={500}
                        style={{ width: "100%" }}
                        alt="Description of the image"
                      />
                      <h3 className="pt-4">{portfolio.title}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionS2;
