import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './portfolio.css';
const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-dark ">
            <div className="text-center text-white py-5">
                <h2 >Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            </div>
            <div className="row p-3 ml-5">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={50}
                >
                    <img className="img-fluid item pb-5" src={carousel1} alt="" />
                    <img className="img-fluid item pb-5" src={carousel2} alt="" />
                    <img className="img-fluid item pb-5" src={carousel3} alt="" />
                    <img className="img-fluid item pb-5" src={carousel4} alt="" />
                    <img className="img-fluid item pb-5" src={carousel5} alt="" />

                </OwlCarousel>
            </div>
        </section>
    );
};

export default Portfolio;