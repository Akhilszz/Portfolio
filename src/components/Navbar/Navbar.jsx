import React, { useState } from 'react';
import logo from '../Assets/logo.jpg';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    function handleClose() {
        setToggle(!toggle)
    }

    return (
        <div id='home' className="main-nav">
            <nav>
                <div className="nav-logo">
                    <img src={logo} className="logo" alt="logo" />
                    <h3 className="logo-text">Akhil</h3>
                </div>
                <div className="nav-menu">
                    <ul>
                        <a href="#hero"><li >Home</li> </a>
                        <a href="#about"><li >About</li></a>
                        <a href="#contact"><li >Contact</li></a>
                        <a href="#project"> <li >Projects</li></a>
                    </ul>
                </div>
                <div onClick={handleToggle} className="hamburger">
                    <FontAwesomeIcon icon={toggle ? faTimes : faBars} size="2x" />
                </div>
                <div className={toggle ? 'show-menu' : 'hide-menu'}>
                    <ul className="hamburger-open">
                        <a href="#hero"><li onClick={handleClose}>Home</li> </a>
                        <a href="#about"><li onClick={handleClose}>About</li></a>
                        <a href="#contact"><li onClick={handleClose}>Contact</li></a>
                        <a href="#project"> <li onClick={handleClose}>Projects</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
