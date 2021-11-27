import React from 'react';
import { Link } from 'react-router-dom';

const HomeCourse = (props) => {
    const {name,language,teacher,students,price,img} = props.course || {};
    return (
        <div className="col-md-6 col-sm-1 gy-5">
            <div class="card" style={{"width": "30rem"}}>
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text ">Instructor: <small className="fw-bold">{teacher}</small></p>
                            <p class="card-text">Student Enrolled: <small className="fw-bold">{students}</small></p>
                            <p class="card-text">language: <small className="fw-bold">{language}</small></p>
                            <p class="card-text">price: <small className="fw-bold">${price}</small></p>
                            <Link to="/courses" class="btn button text-white bg-danger" ><i class="fas fa-shopping-cart"></i> Enroll Now</Link>
                        </div>
            </div>
        </div>
    );
};

export default HomeCourse;