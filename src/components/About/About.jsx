import React from 'react';
import photo from '../Assets/About.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './About.css'; // Add your CSS file

export const About = () => {
    return (
        <div id='about' className="main-about">
            <div className="intro">
                <h6>Introduction</h6>
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                <div className="about-image">
                    <img src={photo} alt="Akhil K S" />
                </div>
                <div className="about-text">
                    <p>
                        I'm Akhil K S, a budding Full stack developer eager to learn and apply my skills in software
                        development. I'm passionate about coding and fascinated by the complexities of creating user-friendly
                        interfaces. I'm on a journey to turn my programming concepts into fully functional applications and
                        excited to explore all aspects of the MERN stack.
                    </p>
                    <div className="cards">
                        <div className="card">
                            <FontAwesomeIcon icon={faCode} size="2x" />
                            <h2>Technologies</h2>
                            <p>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind, Redux, RESTfull API</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                            <h2>Education</h2>
                            <p>Bachelor of Computer Application</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
                            <h2>Projects</h2>
                            <p>Built many projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
