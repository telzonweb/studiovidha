import React from "react";
import ContactForm from "../ContactFrom";
import sIcon1 from "../../images/contact/icon1.png";
import sIcon2 from "../../images/contact/icon2.png";
import sIcon3 from "../../images/contact/icon3.png";

const Contactpage = () => {
  return (
    <div>
      <div class="contact-map" id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0486302926774!2d79.07295289999999!3d21.110627299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfd94057ca5f%3A0xfab396a48f6162bc!2sSTUDIO%20VIDHA!5e0!3m2!1sen!2sin!4v1713608620565!5m2!1sen!2sin"></iframe>
      </div>
      <div className="contact-info text-center mb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={sIcon1} alt="Icon" />
                <p>202, Chhatrapati Nagar, Ring Road, Nagpur-440015</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={sIcon2} alt="Icon" />
                <p>
                  studiovidha@gmail.com <br />
                  +91 9881102067
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={sIcon3} alt="Icon" />
                <p>
                  Web Address: <br />
                  studiovidha.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactForm/> */}
    </div>
  );
};

export default Contactpage;
