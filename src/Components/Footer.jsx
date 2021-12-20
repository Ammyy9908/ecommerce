import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/footer-logo.svg"
function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-wrapper">
                <hr/>
                <div className="footer-content">
                    <div className="footer-left">
                        <img src={footer_logo} alt="footer-logo" />
                        <p>Your natural candle made for your home and for your wellness.</p>
                    </div>
                    <div className="footer-links">
                        <div className="links-wrapper">
                            <h3>Discovery</h3>
                            <div className="links">
                                <a href="#new">New season</a>
                                <a href="#searched">Most searched</a>
                                <a href="#selled">Most selled</a>
                            </div>
                        </div>
                        <div className="links-wrapper">
                            <h3>About</h3>
                            <div className="links">
                                <a href="#help">Help</a>
                                <a href="#ship">Shipping</a>
                                <a href="#afillate">Affiliate</a>
                            </div>
                        </div>
                        <div className="links-wrapper">
                            <h3>Info</h3>
                            <div className="links">
                                <a href="#contact">Contact us</a>
                                <a href="#privacy">Privacy Policies</a>
                                <a href="#terms">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
