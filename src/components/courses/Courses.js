import React, { useEffect, useState } from 'react';
import CoursesCard from '../coursesCard/CoursesCard';
import CoursesCart from '../coursesCart/CoursesCart';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddCart = (course) => {
        const newCart = [...cart,course]
        setCart(newCart)
    }
    useEffect(()=>{
        fetch('/course2.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold text-danger pt-5">Our Courses</h1>
            <div className="ms-5">
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="row">
                        {
                            courses.map(course => <CoursesCard key={course.id} course={course} handleAddCart={handleAddCart}></CoursesCard>)
                        }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <CoursesCart cart={cart}></CoursesCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;