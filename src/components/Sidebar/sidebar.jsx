import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser, faContactCard, faBookmark } from '@fortawesome/free-regular-svg-icons'; // Use regular icons for outline style
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="social-links">

                <a href="#home">
                    <FontAwesomeIcon icon={faHeart} />
                </a>
                <a href="#about">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="#contact">
                    <FontAwesomeIcon icon={faContactCard} />
                </a>
                <a href="#project">
                    <FontAwesomeIcon icon={faBookmark} />
                </a>
                <a href="https://github.com/Akhilszz" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/aki__ls" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/6282851769" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
        </aside>
    );
};
