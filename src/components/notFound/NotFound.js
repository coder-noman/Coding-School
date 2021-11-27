import React from 'react';
import './notFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
            <h1 className="text-center text-danger fw-bold">404</h1>
            <h2>Page Not Found</h2>
            </div>
        </div>
    );
};

export default NotFound;