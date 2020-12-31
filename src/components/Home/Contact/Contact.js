import React from 'react';

const Contact = () => {
    return (
        <section style={{ background: '#FBD062' }}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 py-5">
                        <h3>
                            Let us handle your <br />
                    project, professionally.
                </h3>
                        <p className="mt-4">
                            With well written codes, we build amazing apps for all <br />
                    platforms, mobile and web apps in general.
                </p>
                    </div>
                    <div className="col-md-6 py-5">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" rows="6" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark text-light px-3">Send</button>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <p className="text-center">Copyright Orange Labs 2020</p>
                </div>

            </div>
        </section>
    );
};

export default Contact;