import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import ServiceDataTable from './ServiceDataTable';


const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/getOrders')
                .then(res => res.json())
                .then(data => setOrders(data));
        }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10" >
            <div className="d-flex justify-content-between align-items-center py-3 ">
                    <h1 className="h2">Make Admin</h1>
                    <div className="mb-2 mb-md-0">
                        <img src={loggedInUser.photoURL} alt="" className="img-fluid w-25" style={{borderRadius:50}}/>
                        <button onClick={()=> setLoggedInUser({ isSignIn: false, name: '', email: '', photoURL: '' })} type="button" className="btn btn-outline-secondary ml-2">SignOut</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <ServiceDataTable order={orders}></ServiceDataTable>
                </div>
            </div>

        </div>
    );
};

export default ServiceList;