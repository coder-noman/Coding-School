import React from 'react';
import './homeText.css'

const HomeText = () => {
    return (
        <div className="homeText-col">
            <div className="left-col">
                <h1>Enabling transformation</h1>
                <p>Your learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:</p>
                <h4>Experience</h4>
                <p>Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
                <h4>Practice</h4>
                <p>Demonstrating your knowledge is a critical part of learning.courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
                <h4>Apply</h4>
                <p>Learning on transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</p>
            </div>
            <div className="right-col">
                <img src="https://www.edx.org/images/stock/koosh-brain.png" alt="" />
            </div>
        </div>
    );
};

export default HomeText;