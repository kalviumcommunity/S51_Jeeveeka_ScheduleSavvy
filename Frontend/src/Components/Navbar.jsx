import React from 'react';
import '../Styles/Navbar.css';
import image from '../assets/image1.jpg';
import logo from '../assets/Logo_monochrome.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out');
      navigate('/');
    } catch (error) {
      toast.error(`Error logging out: ${error.message}`);
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className="navbar_wrapper">
          <div className="navbar_logo"><img id='logo_navbar' src={logo} alt="logo" /></div>
          <input className='navbar_input' type="radio" name="slider" id="menu-btn" />
          <input className='navbar_input' type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="navbar_btn navbar_close-btn"><i className="fas fa-times"></i></label>
            <Link to='/home'><li className='navbar_li'><h6 className='navbar_headers'>Calender</h6></li></Link>
            <li className='navbar_li'>
              <h6 id='navbar_res2' className='navbar_headers'>Features</h6>
              <input className='navbar_input' type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Features</label>
              <div className="mega-box">
                <div className="navbar_content">
                  <div className="row">
                    <img id='navbar_planner_image' src={image} alt="planner_image" />
                  </div>
                  <div className="row">
                    <header className='nav_header'>All-In-One Organizer</header>
                    <ul className="mega-links">
                      <a href="https://socialplatform07.netlify.app/auth" target="_blank"><li className='navbar_li'><h6 className='navbar_headers'>Social Platform</h6></li></a>
                      <Link to='/clock'><li className='navbar_li'><h6 className='navbar_headers'>Timer</h6></li></Link>
                      <Link to='/challenges'><li className='navbar_li'><h6 className='navbar_headers'>Challenges</h6></li></Link>
                      <a href="https://chatbothelp.netlify.app/" target='_blank'><li className='navbar_li'><h6 className='navbar_headers'>Chatbot Help</h6></li></a>
                    </ul>
                  </div>
                  <div className="row">
                    <header className='nav_header'>Creative Customization</header>
                    <ul className="mega-links">
                      <Link to='/theme'><li className='navbar_li'><h6 className='navbar_headers'>Themes</h6></li></Link>
                      <Link to='/musicplayer'><li className='navbar_li'><h6 className='navbar_headers'>Music Player</h6></li></Link>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='navbar_li'>
              <h6 id='navbar_res' className='navbar_headers'>More Info</h6>
              <input className='navbar_input' type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">More Info</label>
              <ul className="navbar_dropmenu">
                <Link to='/aboutus'><li className='navbar_li'><h6 className='navbar_headers'>About Us</h6></li></Link>
                <Link to='/contactus'><li className='navbar_li'><h6 className='navbar_headers'>Contact Us</h6></li></Link>
                <Link to='/feedback'><li className='navbar_li'><h6 className='navbar_headers'>Feedback</h6></li></Link>
              </ul>
            </li>
            <li className='navbar_li' onClick={handleLogout}>
              <h6 className='navbar_headers' id='logout_button'>Logout <i className="fas fa-sign-out-alt"></i></h6>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="navbar_btn navbar_menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>
    </>
  );
}
