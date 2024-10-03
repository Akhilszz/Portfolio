import React from 'react';
import './Hero.css';
import myPhoto from '../Assets/logo.jpeg';
import resume from '../Assets/Akhil_Resume.pdf'

export const Hero = () => {
    return (
        <section id='hero' className="hero-section">
            <div className="hero-content">
                <div className="hero-image">
                    <img src={myPhoto} alt="Your Name" />
                </div>
                <div className="hero-text">
                    <h1>Hi! iam Akhil K S</h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        I am  a full satck developer from india. BCA Graduate from Sree Sabareesa College.
                        Currenty expertising in Mern Stack also worked in Machine Learning and Data Analytics

                    </p>
                    <a href={resume} download="Akhil_Resume.pdf" className="download-button">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};
