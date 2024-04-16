import React from 'react';
import '../Styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src="" alt="footerImg" />
                </div>

                <div className="footer-section">
                    <h3 className='footer_titles' >Contact</h3>
                    <p>123 Main St, Chennai, India</p>
                    <p>Email: jeeveekawork@gmail.com</p>
                    <p>Phone: +91 9498407843</p>
                </div>

                <div className="footer-section">
                    <h3  className='footer_titles'>Navigation</h3>
                    <ul className="footer-links">
                        <li><a className='footer_navigation' href="#home">Home</a></li>
                        <li><a className='footer_navigation' href="#about">About</a></li>
                        <li><a className='footer_navigation' href="#services">Services</a></li>
                        <li><a className='footer_navigation' href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className='footer_titles'>Follow Us</h3>
                    <ul className="footer-social">
                        <li className='footer_social'><a href="#facebook" className="footer_social-link"><i className="fab fa-facebook-f"></i></a></li>
                        <li className='footer_social'><a href="#twitter" className="footer_social-link"><i className="fab fa-twitter"></i></a></li>
                        <li className='footer_social'><a href="#instagram" className="footer_social-link"><i className="fab fa-instagram"></i></a></li>
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
