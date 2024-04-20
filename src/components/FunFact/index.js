import React from "react";
import CountUp from "react-countup";

const FunFact = (props) => {
  const funFact = [
    // {
    //   title: "450",
    //   subTitle: "Square Areas",
    //   sts: "Complex",
    // },
    {
      title: "500",
      subTitle: "Happy",
      sts: "Clients",
    },
    {
      title: "80",
      subTitle: "Completed",
      sts: "Projects",
    },
    {
      title: "15",
      subTitle: "Cities",
      sts: "Present",
    },
  ];

  return (
    <section className={`success-section mb-115 ${props.fClass}`}>
      <div className="container">
        <div className="row">
          {funFact.map((funfact, fitem) => (
            <div className="col-xl-3 col-md-6" key={fitem}>
              <div className="success-box">
                <span className="count-text" data-stop={funfact.title}>
                  <CountUp end={funfact.title} enableScrollSpy />
                </span>
                <div className="success-content">
                  <h3>{funfact.subTitle}</h3>
                  <h6>{funfact.sts}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFact;
