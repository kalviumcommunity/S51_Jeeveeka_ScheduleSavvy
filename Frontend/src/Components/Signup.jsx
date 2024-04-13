import React, { useState } from 'react';
import '../Styles/Signup.css';
import signinSvg from '../assets/signin.svg';
import signupSvg from '../assets/signup.svg';

const Signup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isSignUpMode2, setIsSignUpMode2] = useState(false);

  return (
    <div id='signup_container'>
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} ${isSignUpMode2 ? 'sign-up-mode2' : ''}`}>
        <div className="signin-signup">
            <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user" />
                <input className='signup_input' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i className="fas fa-lock" />
                <input className='signup_input' type="password" placeholder="Password" />
            </div>
            <p id='forget_pswd'>Forgot password?</p>
            <br />
            <input type="submit" value="Login" className="btn" />
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                <i className="fab fa-facebook" />
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
                </a>
            </div>
            <p className="account-text">
                Don't have an account? <a href="#" onClick={() => setIsSignUpMode2(true)} id="sign-up-btn2">Sign up</a>
            </p>
            </form>

            <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user" />
                <input className='signup_input' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i className="fas fa-envelope" />
                <input className='signup_input' type="text" placeholder="Email" />
            </div>
            <div className="input-field">
                <i class="fas fa-lock" />
                <input className='signup_input' type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn" />
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                <i className="fab fa-facebook" />
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
                </a>
            </div>
            <p className="account-text">
                Already have an account? <a href="#" onClick={() => setIsSignUpMode2(false)} id="sign-in-btn2">Sign in</a>
            </p>
            </form>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
            <div className="content">
                <h3 className='signup_title'>Part of Schedule Savvy?</h3>
                <p className='account_text'>Welcome back! Sign in to take charge of your day.</p>
                <button className="btn" onClick={() => setIsSignUpMode(false)} id="sign-in-btn">Sign in</button>
            </div>
            <img src={signinSvg} alt="Sign in" className="image" />
            </div>
            <div className="panel right-panel">
            <div className="content">
                <h3 className='signup_title'>New to Schedule Savvy?</h3>
                <p className='account_text'>Join us today! Discover seamless scheduling and productivity.</p>
                <button className="btn" onClick={() => setIsSignUpMode(true)} id="sign-up-btn">Sign up</button>
            </div>
            <img src={signupSvg} alt="Sign up" className="image" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Signup;
