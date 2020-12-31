import React from 'react';

const OrderCard = ({ order }) => {
    console.log("orders", order)
    return (
        <div className="col-md-4">
            <div class="card " style={{height:220}}>
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                        <img style={{ width: 74 }} src={`http://localhost:5000/${order.img}`} className="img-fluid" alt="..." />
                        <div>
                            <input type="button" className="btn btn-sm btn-info" name="" id="" value="pending" />
                        </div>
                    </div>
                    <div>
                        <h5 class="card-title">{order.service}</h5>
                        <p class="card-text">{order.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;