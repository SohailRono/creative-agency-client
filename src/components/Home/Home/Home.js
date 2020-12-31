import React from 'react';
import Brand from '../Brand/Brand';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header />
            <Brand />
            <Services />
            <Portfolio />
            <Review />
            <Contact />
        </div>
    );
};

export default Home;