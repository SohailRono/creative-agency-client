import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/logos/Frame.png';

const Banner = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-5 mt-0 mt-md-5 order-1 order-md-0">
                    <h1 >Let’s Grow Your<br/>
                    Brand To The <br/>
                    Next Level</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias, alias laborum doloribus perferendis pariatur!</p>
                    <Link className="btn btn-dark text-light mt-3" to="/addorder">HIRE US</Link>
                </div>
                <div className="col-md-7">
                    <img src={banner} className='img-fluid' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;