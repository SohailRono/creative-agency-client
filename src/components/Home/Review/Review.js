import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://limitless-beach-77218.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <section className="container my-5">
            <h2 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="row my-5 justify-content-center p-3">
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;