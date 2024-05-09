import React from 'react';
import contactImage from '../assets/contact_us_image.jpg';
import '../Styles/ContactUs.css';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="contact-container">
      <Link to='/home'><button className='contact-back'>Back</button></Link>
      <div className='contact-background'>
        <div>
          <img className="contact-image" src={contactImage} alt="contact_us" />
        </div>
        <div className="contact-info">
          <div className="contact-info-item">
            <strong>Phone:</strong>
            <p>+91 9498330845</p>
          </div>
          <div className="contact-info-item">
            <strong>Email:</strong>
            <p>jeeveekawork@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <strong>Website:</strong>
            <p>https://schedulesavvy7.netlify.app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
