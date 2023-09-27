import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "../componentStyles/main.css";

function Navbar(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <a href="/#Home"><h3>Logo</h3></a>
            <nav ref={navRef}>
                <a href="/#">Login</a>
                <a href="/#">Rent out a Property</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;