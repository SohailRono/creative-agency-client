import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';


const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services,setServices] = useState({});
    const [file,setFiles] = useState(null);

    const handleBlur = e => {
        const newServices = {...services};
        newServices[e.target.name] = e.target.value;
        setServices(newServices);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFiles(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', services.title);
        formData.append('description', services.description);
        formData.append('cssclass', services.cssclass);

        fetch('https://limitless-beach-77218.herokuapp.com/addServices', {
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
                    <h1 className="h2">Make Admin</h1>
                    <div className="mb-2 mb-md-0">
                        <img src={loggedInUser.photoURL} alt="" className="img-fluid w-25" style={{borderRadius:50}}/>
                        <button onClick={()=> setLoggedInUser({ isSignIn: false, name: '', email: '', photoURL: '' })} type="button" className="btn btn-outline-secondary ml-2">SignOut</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="container p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="card shadow h-100 rounded table-responsive p-5">
                                <div className="row ">
                                    <div className="col col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="title">Service Title</label>
                                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Service Title" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Icon</label>
                                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Icon" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cssclass">Service Card Class Name</label>
                                            <input onBlur={handleBlur} type="text" className="form-control" name="cssclass" placeholder="css class name like card shadow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" className="btn btn-success ml-auto m-3" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;