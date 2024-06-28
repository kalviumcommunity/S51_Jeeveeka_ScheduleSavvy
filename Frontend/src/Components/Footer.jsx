import React from 'react';
import '../Styles/Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content-container">
                <div className="footer-logo">
                    <img src="" alt="Footer Logo" />
                </div>

                <div className="footer-contact">
                    <h3 className='footer-title'>Contact</h3>
                    <p className='footer-text'>123 Main St, Chennai, India</p>
                    <p className='footer-text'>Email: jeeveekawork@gmail.com</p>
                    <p className='footer-text'>Phone: +91 9498407843</p>
                </div>

                <div className="footer-follow">
                    <h3 className='footer-title'>Follow Us</h3>
                    <ul className="footer-social-links">
                        <li><a className='footer-social-link' href="#facebook"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a className='footer-social-link' href="#twitter"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a className='footer-social-link' href="#instagram"><i className="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Schedule Savvy Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
