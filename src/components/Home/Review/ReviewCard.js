import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="col-md-4 my-3">
            <div class="card " >
                <div class="card-body" style={{height:200}}>
                    <div className="d-flex justify-content-start align-items-center">
                        <img style={{ width: 74 }} src={`http://localhost:5000/${review.img}`} className="img-fluid" alt="..." />
                        <div className="pl-3">
                            <h6>{review.name}</h6>
                            <p >{review.designation}</p>
                        </div>
                    </div>
                    <div>
                        <p class="card-text">{review.description}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;