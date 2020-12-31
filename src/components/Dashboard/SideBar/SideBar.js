import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Sidebar.css'

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/getAdminUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    return (

        <nav id="sidebarMenu" className="d-md-block sidebar collapse">
            <div className="pt-3">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="img-fluid"/>
                </Link>
            </div>
            <div className="pt-3">

                {
                    isAdmin ?
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/servicelist">
                                    <i class="fas fa-shopping-bag" ></i> &nbsp;Service List
                        </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/addservice">
                                    <i class="fa fa-plus" ></i> &nbsp;Add Service
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/makeadmin">
                                    <i class="fa fa-user-plus" ></i> &nbsp;Make Admin
                        </Link>
                            </li>
                        </ul>
                        :

                        <ul>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addorder">
                                    <i class="fa fa-shopping-bag" ></i> &nbsp;Orders
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orderlist">
                                    <i class="fa fa-shopping-bag" ></i> &nbsp;Service List
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addreview">
                                    <i class="fa fa-shopping-bag" ></i> &nbsp;Review
                        </Link>
                            </li>
                        </ul>
                }
            </div>
        </nav>

    );
};

export default SideBar;