import React from 'react';

const ServiceDataTable = ({ order }) => {
    
    return (
        <div className="container-fluid row p-4">
            <div className="card shadow rounded table-responsive">
                <table className="table table-borderless">
                    <thead className="text-secondary bg-light rounded">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            order.map((order, index) =>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td>{order.description}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceDataTable;