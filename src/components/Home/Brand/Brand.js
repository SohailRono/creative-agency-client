import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';


const Brand = () => {
    return (
        <section className="container-fluid">
            <div className="row animate__animated animate__slideInRight">
                <div className="p-3 col-md-2 offset-md-1 col-sm-6 col-offset-1"><img className="w-50 img-fluid" src={slack} alt="" /></div>
                <div className="p-3 col-md-2 col-sm-6"><img className="w-50 img-fluid" src={google} alt="" /></div>
                <div className="p-3 col-md-2 col-sm-6"><img className="w-50 img-fluid" src={uber} alt="" /></div>
                <div className="p-3 col-md-2 col-sm-6"><img className="w-50 img-fluid" src={netflix} alt="" /></div>
                <div className="p-3 col-md-2 col-sm-6"><img className="w-50 img-fluid" src={airbnb} alt="" /></div>
            </div>
        </section>
    );
};

export default Brand;