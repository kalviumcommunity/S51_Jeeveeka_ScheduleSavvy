import React from 'react'
import '../Styles/Navbar.css'
import image from '../assets/image1.jpg'

export default function Navbar() {
  return (
    <>
        <nav>
            <div className="wrapper">
                <div className="logo"><h6>Logo</h6></div>
                <input type="radio" name="slider" id="menu-btn"/>
                <input type="radio" name="slider" id="close-btn"/>
                <ul className="nav-links">
                <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                <li><h6>Calender</h6></li>
                <li><h6>Myself</h6></li>
                <li>
                    <h6 className="desktop-item">Features</h6>
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
                            <li><h6>Social Media Dashboard</h6></li>
                            <li><h6>Timer</h6></li>
                            <li><h6>Challenges</h6></li>
                            <li><h6>Motivation</h6></li>
                        </ul>
                        </div>
                        <div className="row">
                        <header>Creative Customization</header>
                        <ul className="mega-links">
                            <li><h6>Themes</h6></li>
                            <li><h6>Music Library</h6></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <h6 className="desktop-item">More Info</h6>
                    <input type="checkbox" id="showDrop"/>
                    <label htmlFor="showDrop" className="mobile-item">More Info</label>
                    <ul className="drop-menu">
                    <li><h6>About Us</h6></li>
                    <li><h6>Contact Us</h6></li>
                    <li><h6>Feedback</h6></li>
                    </ul>
                </li>
                <li><h6>Profile</h6></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
            </div>
        </nav>
    </>
  )
}
