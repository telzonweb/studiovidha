import React from "react";

const CtaSection = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const redirectToWhatsapp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=123456789";
  };

  return (
    <section className="call-action">
      <div className="container">
        <div className="call-action-inner">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="section-title text-white rmb-35">
                <h6>Contact Now</h6>
                <h2>Lets create something Amazing</h2>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <form onSubmit={SubmitHandler} className="subscribe">
                                <input type="email" placeholder="enter your mail" required/>
                                <button type="submit" className="theme-btn style-two">subscribe</button>
                            </form> */}
              <a
                href="https://wa.me/+919881102067"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit" className="theme-btn style-two">
                  <i className="fa fa-whatsapp"></i>
                  {"  "} WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
