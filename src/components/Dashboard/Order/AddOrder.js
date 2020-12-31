import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import './Orders.css';

const AddOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState({});
    const [file, setFile] = useState(null);
    const { id } = useParams();
    console.log("id", id)

    useEffect(() => {
        fetch(`http://localhost:5000/getServiceById/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleBlur = e => {
        const newOrders = { ...orders };
        newOrders[e.target.name] = e.target.value;
        setOrders(newOrders);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        
        const formData = new FormData()

        formData.append('name', orders.name);
        formData.append('email', orders.email);
        formData.append('service', orders.service);
        formData.append('description', orders.description);
        formData.append('price', orders.price);
        formData.append('status', "pending");
        formData.append('file', file);

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-2 col-sm-12">
                <SideBar />
            </div>

            <div className="col-md-10 col-sm-12" >
                <div className="d-flex justify-content-between align-items-center py-3 ">
                    <h1 className="h2">Add Orders</h1>
                    <p>{loggedInUser.name}</p>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="container p-4">
                        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" value={loggedInUser.name} name="name" className="form-control" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="email" value={loggedInUser.email} name="email" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" value={orders.title} name="service" className="form-control" placeholder="Service Name (Ex. Graphic Design)" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} value={orders.description} name="description" className="form-control" rows="4" placeholder="Project Details"></textarea>
                            </div>
                            <div className="form-group row">
                                <div className="col-6">
                                    <input onBlur={handleBlur} type="text" name="price" className="form-control" placeholder="Price" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="file" className="btn borders uploadBtn">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span className="ml-2">Upload project file</span>
                                    </label>
                                    <input hidden onChange={handleFileChange} type="file" name="file" id="file" className="form-control" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark text-light px-3">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddOrders;