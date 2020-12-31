import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviews, setReview] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur = e => {
        const newreviews = { ...reviews };
        newreviews[e.target.name] = e.target.value;
        setReview(newreviews);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        
        const formData = new FormData()

        formData.append('name', reviews.name);
        formData.append('designation', reviews.designation);
        formData.append('description', reviews.description);
        formData.append('file', file);

        fetch('http://localhost:5000/addReview', {
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
                    <h1 className="h2">Add reviews</h1>
                    <p>{loggedInUser.name}</p>
                </div>
                <div style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="container p-4">
                        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" value={loggedInUser.name} name="name" className="form-control" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" name="designation" className="form-control" placeholder="Designation, company name" />
                            </div>
                          
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" className="form-control" rows="4" placeholder="Description"></textarea>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="file" className="btn breviews uploadBtn">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span className="ml-2">Upload Image</span>
                                    </label>
                                    <input hidden onChange={handleFileChange} type="file" name="file" id="file" className="form-control" />
                            </div>
                            <div className="form-group row">
                            <button type="submit" className="btn btn-dark text-light px-5 ml-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;