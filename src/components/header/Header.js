import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className=" header">
            <h1 className="text-center text-white pt-5 fw-bold">Start learning from </h1>
            <h1 className="text-danger text-center"> Coding School</h1>
            <p className="text-white text-center pb-1 pt-2">Propel your career, get a degree, or expand your knowledge at any level.</p>
            </div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};

export default Header;