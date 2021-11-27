import React, { useEffect, useState } from 'react';

const About = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/course2.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="text-center container">
            <h2 className="py-4">We have <span className="text-danger">{courses.length}</span> course for enhance your programming skills...</h2>
            <h1 className="text-danger fw-bold">About Us</h1>
            <p>Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, coding school empowers millions of learners to unlock their potential and become changemakers.</p>
        </div>
    );
};

export default About;