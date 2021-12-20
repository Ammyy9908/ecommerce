import React from 'react'
import "./Navbar.css"
import logo from "../assets/icon.svg"
import wordmark from "../assets/wordmark.svg"
import cartIcon from "../assets/Cart.svg"
import menu from "../assets/menu.svg"
import ProfileIcon from "../assets/Profile.svg"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-wrapper">

                <button className="menu-btn">
                    <img src={menu} alt="menu-icon" />
                </button>
                <a href="#logo">
                    <img src={logo} alt="" />
                    <span>
                        <img src={wordmark} alt="" />
                    </span>
                </a>

                <nav>
                    <ul>
                        <li><a href="#discover">Discover</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </nav>
                
                <div className="nav-controls">
                <a href="#user">
                        <img src={ProfileIcon} alt="" />
                    </a>
                    <a href="#cart">
                        <img src={cartIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
