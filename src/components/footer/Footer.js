import React from 'react'
import { Link } from 'react-router-dom'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Bg from '../../images/footer.png'
import pImg1 from '../../images/instagram/instagram1.png'
import pImg2 from '../../images/instagram/instagram2.png'
import pImg3 from '../../images/instagram/instagram3.png'
import pImg4 from '../../images/instagram/instagram4.png'
import pImg5 from '../../images/instagram/instagram5.png'
import pImg6 from '../../images/instagram/instagram6.png'
import CtaSection from '../CtaSection/CtaSection';


const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
]

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <CtaSection/>
            <footer className="footer-section pt-220" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="instagram-posts">
                                {images.map((item, pitem) => (
                                    <div className="instagram-item" key={pitem}>
                                        <img src={item} alt="Instagram" onClick={() => setOpen(true)} />
                                        <div className="instagram-overlay">
                                            <span onClick={() => setOpen(true)}><i className="fa fa-instagram"></i></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="contact-widget">
                                <h3>Contact</h3>
                                <h6>Find out all the ways to enjoy luxury residential life around the world.</h6>
                                <h6>A: 14/A, Miranda City, NYC T: 99 123 45 6970</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-55">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="social-icons">
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-twitter"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-facebook"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-instagram"></i></Link>
                                <Link onClick={ClickHandler} to="/"><i className="fa fa-pinterest"></i></Link>
                            </div>
                            <div className="copyright">
                                <p>© Copyright 2023 by <Link onClick={ClickHandler} to="/">Envarch</Link></p>
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
    )
}

export default Footer;