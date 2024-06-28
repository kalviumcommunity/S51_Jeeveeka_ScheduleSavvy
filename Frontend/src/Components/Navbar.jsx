import React from 'react'
import '../Styles/Navbar.css'
import image from '../assets/image1.jpg'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className="navbar_wrapper">
                <div className="navbar_logo"><img id='logo_navbar' src={logo} alt="logo" /></div>
                <input className='navbar_input' type="radio" name="slider" id="menu-btn"/>
                <input className='navbar_input' type="radio" name="slider" id="close-btn"/>
                <ul className="nav-links">
                <label htmlFor="close-btn" className="navbar_btn navbar_close-btn"><i className="fas fa-times"></i></label>
                <Link to='/home'><li className='navbar_li'><h6 className='navbar_headers'>Calender</h6></li></Link>
                {/* <li className='navbar_li'><h6 className='navbar_headers'>Myself</h6></li> */}
                <li className='navbar_li'>
                    <h6 id='navbar_res2' className='navbar_headers'>Features</h6>
                    <input className='navbar_input' type="checkbox" id="showMega"/>
                    <label htmlFor="showMega" className="mobile-item">Features</label>
                    <div className="mega-box">
                    <div className="navbar_content">
                        <div className="row">
                        <img id='navbar_planner_image' src={image} alt="planner_image"/>
                        </div>
                        <div className="row">
                        <header className='nav_header'>All-In-One Organizer</header>
                        <ul className="mega-links">
                            <li className='navbar_li'><h6 className='navbar_headers'>Forum</h6></li>
                            <Link to='/clock'><li className='navbar_li'><h6 className='navbar_headers'>Timer</h6></li></Link>
                            <Link to='/challenges'><li className='navbar_li'><h6 className='navbar_headers'>Challenges</h6></li></Link>
                            <Link to='/chatbot'><li className='navbar_li'><h6 className='navbar_headers'>Chatbot Help</h6></li></Link>
                        </ul>
                        </div>
                        <div className="row">
                        <header className='nav_header'>Creative Customization</header>
                        <ul className="mega-links">
                            <Link to='/theme'><li className='navbar_li'><h6 className='navbar_headers'>Themes</h6></li></Link>
                            <Link to='/musicplayer'><li className='navbar_li'><h6 className='navbar_headers'>Music Library</h6></li></Link>
                        </ul>
                        </div>
                    </div>
                    </div>
                </li>
                <li className='navbar_li'>
                    <h6 id='navbar_res' className='navbar_headers'>More Info</h6>
                    <input className='navbar_input' type="checkbox" id="showDrop"/>
                    <label htmlFor="showDrop" className="mobile-item">More Info</label>
                    <ul className="navbar_dropmenu">
                    <Link to='/aboutus'><li className='navbar_li'><h6 className='navbar_headers'>About Us</h6></li></Link>
                    <Link to='/contactus'><li className='navbar_li'><h6 className='navbar_headers'>Contact Us</h6></li></Link>
                    <Link to='/feedback'><li className='navbar_li'><h6 className='navbar_headers'>Feedback</h6></li></Link>
                    </ul>
                </li>
                </ul>
                <label htmlFor="menu-btn" className="navbar_btn navbar_menu-btn"><i className="fas fa-bars"></i></label>
            </div>
        </nav>
    </>
  )
}
