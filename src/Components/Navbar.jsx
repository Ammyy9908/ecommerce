import React from 'react'
import "./Navbar.css"
import logo from "../assets/icon.svg"
import wordmark from "../assets/wordmark.svg"
import cartIcon from "../assets/Cart.svg"
import menu from "../assets/menu.svg"
import ProfileIcon from "../assets/Profile.svg"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Navbar({cart}) {
    return (
        <div className='navbar'>
            <div className="navbar-wrapper">

                <button className="menu-btn">
                    <img src={menu} alt="menu-icon" />
                </button>
                <Link to="/">
                    <img src={logo} alt="" />
                    <span>
                        <img src={wordmark} alt="" />
                    </span>
                </Link>

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
                    <Link to="/cart" className='cart-icon'>
                        {cart.length>0 && <span className="cart_counter">{cart.length}</span>}
                        <img src={cartIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cart:state.appReducer.cart
})

export default connect(mapStateToProps,null)(Navbar)
