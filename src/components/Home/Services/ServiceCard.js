import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceCard = ({ service }) => {
    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to={`/addorder/${service._id}`}>
                <div className={`${service.cssclass} p-3 m-3`} style={{ width: '18rem', height: 250 }}>
                    <div className="dd d-flex align-items-center">
                        <img style={{ width: 74 }} src={`http://localhost:5000/${service.img}`} className="card-img-top m-auto " alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="text-dark">{service.title}</h5>
                        <p className="text-muted small">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default ServiceCard;