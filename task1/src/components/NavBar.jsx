import React, { useState } from "react";
import "./NavBar.css";
import { Logo, Changer, MenuIcon } from "../assets";
import {NavLink} from 'react-router-dom'



const NavBar = () => {

    const [color, setColor] = useState('white');

  function handleClick() {
    const newColor = color === 'white' ? '#17161B' : 'white';
    setColor(newColor);
    document.body.style.backgroundColor = newColor;}


    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar-links">
                <NavLink to="/empty" className="navLink">Buy a house</NavLink>
                    <NavLink to="/empty" className="navLink">Rent a house</NavLink>
                    <NavLink to="/empty" className="navLink">Mortgage</NavLink>
                    
                </div>

              



                <div className="theme-changer">
                    <button onClick={handleClick} className="theme-changing-button"><img src={Changer} alt="" /></button>
                </div>
            </div>
        </>
    );
};

export default NavBar;
