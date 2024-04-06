import React from 'react'
import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <>
        <nav>
            <div className="wrapper">
                <div className="logo"><a href="#">Logo</a></div>
                <input type="radio" name="slider" id="menu-btn"/>
                <input type="radio" name="slider" id="close-btn"/>
                <ul className="nav-links">
                <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                <li><a href="#">Calender</a></li>
                <li><a href="#">Myself</a></li>
                <li>
                    <a href="#" className="desktop-item">Features</a>
                    <input type="checkbox" id="showMega"/>
                    <label htmlFor="showMega" className="mobile-item">Features</label>
                    <div className="mega-box">
                    <div className="content">
                        <div className="row">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt=""/>
                        </div>
                        <div className="row">
                        <header>Email Services</header>
                        <ul className="mega-links">
                            <li><a href="#">Personal Email</a></li>
                            <li><a href="#">Business Email</a></li>
                            <li><a href="#">Mobile Email</a></li>
                            <li><a href="#">Web Marketing</a></li>
                        </ul>
                        </div>
                        <div className="row">
                        <header>Security services</header>
                        <ul className="mega-links">
                            <li><a href="#">Site Seal</a></li>
                            <li><a href="#">VPS Hosting</a></li>
                            <li><a href="#">Privacy Seal</a></li>
                            <li><a href="#">Website design</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="desktop-item">More Info</a>
                    <input type="checkbox" id="showDrop"/>
                    <label htmlFor="showDrop" className="mobile-item">More Info</label>
                    <ul className="drop-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Feedback</a></li>
                    </ul>
                </li>
                <li><a href="#">Settings</a></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
            </div>
        </nav>
    </>
  )
}
