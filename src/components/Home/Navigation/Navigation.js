import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import logo from '../../../images/logos/logo.png';

const Navigation = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to="#">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-dark text-light px-3" to="/dashboard">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>

    );
};

export default Navigation;