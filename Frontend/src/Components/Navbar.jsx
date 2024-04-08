import React from 'react'
import '../Styles/Navbar.css'
import image from '../assets/image1.jpg'

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
                        <img src={image} alt="planner_image"/>
                        </div>
                        <div className="row">
                        <header>All-In-One Organizer</header>
                        <ul className="mega-links">
                            <li><a href="#">Social Media Dashboard</a></li>
                            <li><a href="#">Timer</a></li>
                            <li><a href="#">Challenges</a></li>
                            <li><a href="#">Motivation</a></li>
                        </ul>
                        </div>
                        <div className="row">
                        <header>Creative Customization</header>
                        <ul className="mega-links">
                            <li><a href="#">Themes</a></li>
                            <li><a href="#">Music Library</a></li>
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
                <li><a href="#">Profile</a></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
            </div>
        </nav>
    </>
  )
}
