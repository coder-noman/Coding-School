import React, { useEffect, useState } from 'react';
import HomeCourse from '../homeCourse/HomeCourse';
import HomeText from '../homeText/HomeText';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/course1.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <HomeText></HomeText>
            <h1 className="text-center fw-bold text-danger pt-5">Start Your Coding Journey....</h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-1">
                        <div className="row">
                        {
                            courses.map(course => <HomeCourse key={course.id} course={course} ></HomeCourse>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

        </div>
    );
};

export default Home;