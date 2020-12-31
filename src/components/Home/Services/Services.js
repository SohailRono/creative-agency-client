import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <section className="container my-5">
            <h2 className="text-center">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <div className="row my-5 justify-content-center p-3">
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;