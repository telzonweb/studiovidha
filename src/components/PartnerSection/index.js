import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/client/client1.png'
import pimg2 from '../../images/client/client2.png'
import pimg3 from '../../images/client/client3.png'
import pimg4 from '../../images/client/client4.png'
import pimg5 from '../../images/client/client5.png'
import { Link } from "react-router-dom";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg3,
    },
]


const PartnerSection = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className="client-section pb-30 pt-85">
            <div className="container">
                <div className="client-inner">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="client-item" key={pitem}>
                                <Link to="/"><img src={partner.pImg} alt="Client" /></Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default PartnerSection;