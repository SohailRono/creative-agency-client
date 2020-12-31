import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <section className="header-sec">
            <Navigation />
            <Banner />
        </section>
    );
};

export default Header;