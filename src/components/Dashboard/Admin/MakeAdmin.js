import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});
   
    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', admin.email);

        fetch('http://localhost:5000/addAdmin', {
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
        <section className="container-fluid ">
            <div className="row">
            <div className="col-md-2 col-sm-12">
                <SideBar />
            </div>
            <div className="col-md-10 col-sm-12" >
                <div className="d-flex justify-content-between align-items-center py-3 ">
                    <h1 className="h2">Make Admin</h1>
                    <div className="mb-2 mb-md-0">
                        <img src={loggedInUser.photoURL} alt="" className="img-fluid w-25" style={{borderRadius:50}}/>
                        <button onClick={()=> setLoggedInUser({ isSignIn: false, name: '', email: '', photoURL: '' })} type="button" className="btn btn-outline-secondary ml-2">SignOut</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="container p-4">
                        <form onSubmit={handleSubmit} className="form-inline">
                            <div className="card shadow h-100 rounded table-responsive p-5">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleBlur} type="text" className="form-control col-md-4 col-sm-6 mx-2" name="email" placeholder="john@gmail.com" />
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       
            </div>
            </section>
    );
};

export default MakeAdmin;