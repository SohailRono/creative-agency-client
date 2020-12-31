import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import OrderCard from './OrderCard';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://limitless-beach-77218.herokuapp.com/getOrdersByEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);
    return (
        <section className="container-fluid row">
            <div className="col-md-2 col-sm-12">
                <SideBar />
            </div>

            <div className="col-md-10 col-sm-12" >
                <div className="d-flex justify-content-between align-items-center py-3 ">
                    <h1 className="h2">Orders</h1>
                    <p>{loggedInUser.name}</p>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="row p-4">
                        {
                            orders.map(order => <OrderCard key={order._id} order={order}></OrderCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;