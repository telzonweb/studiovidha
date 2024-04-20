import React from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Bg from "../../images/footer.png";
import pImg1 from "../../images/contact/contact-1.png";
import pImg2 from "../../images/contact/contact-2.png";
import pImg3 from "../../images/contact/contact-3.png";
import pImg4 from "../../images/contact/contact-4.png";
import pImg5 from "../../images/contact/contact-5.png";
import pImg6 from "../../images/contact/contact-6.png";
import CtaSection from "../CtaSection/CtaSection";

const images = [pImg1, pImg2, pImg3, pImg4, pImg5, pImg6];

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <CtaSection />
      <footer
        className="footer-section pt-220"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              {/* <div className="instagram-posts">
                                {images.map((item, pitem) => (
                                    <div className="instagram-item" key={pitem}>
                                        <img src={item} alt="Instagram" onClick={() => setOpen(true)} />
                                        <div className="instagram-overlay">
                                            <span onClick={() => setOpen(true)}><i className="fa fa-instagram"></i></span>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
              <img
                height={100}
                width={150}
                src="studiovidhaLogo.png"
                alt="logo"
              />
              <p style={{ color: "white" }}>
                A studio specializing in Architecture and Interior Designing,
                adopting the title 'Vidha' not only reflects our cultural roots
                but also accentuates our identity and purpose within the
                architectural realm.
              </p>
              <div className="social-icons">
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="contact-widget">
                <h3>Contact</h3>
                <p style={{ color: "white" }}>+91 9881102067</p>
                <p style={{ color: "white" }}>studiovidha@gmail.com</p>
                <p style={{ color: "white" }}>
                  202, Chhatrapati Nagar, Ring Road, Nagpur-440015
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-55">
          <div className="container">
            <div className="bottom-inner">
              {/* <div className="social-icons">
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-instagram"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-pinterest"></i></Link>
                            </div> */}
              <div className="copyright">
                <p>
                  © Copyright {new Date().getFullYear()} by{" "}
                  <Link onClick={ClickHandler} to="/">
                    StudioVidha
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: pImg1 },
            { src: pImg2 },
            { src: pImg3 },
            { src: pImg4 },
            { src: pImg5 },
            { src: pImg6 },
          ]}
          plugins={[Zoom]}
        />
      </footer>
    </div>
  );
};

export default Footer;
