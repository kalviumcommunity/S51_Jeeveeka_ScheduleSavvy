import React, { useState } from 'react';
import '../Styles/Signup.css';
import signinSvg from '../assets/signin.svg';
import signupSvg from '../assets/signup.svg';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handle signup
    const onSubmitSignup = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!username || !email || !password) {
            toast.error('Please fill in all the fields.');
            return;
        }

        // Check if password is greater than 3 characters
        if (password.length <= 3) {
            toast.error('Password should be greater than 3 characters.');
            return;
        }

        try {
            // Create a new user account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Send email verification
            await sendEmailVerification(user);
            toast.info('Verification email sent. Please check your inbox.');
            
            // Clear the fields
            setEmail('');
            setPassword('');
            setUsername('');

            // Redirect to login page
            setIsSignUpMode(false);
        } catch (error) {
            // Handle signup errors
            console.error('Error during signup:', error);
            toast.error(`Error: ${error.message}`);
        }
    };

    // Handle sign-in
    const onSubmitSignin = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if email is verified
            if (!user.emailVerified) {
                toast.error('Please verify your email before signing in.');
                return;
            }

            toast.success('Successfully signed in!');
            // Redirect to a different page after successful sign-in (e.g., home page)
            navigate('/home');
        } catch (error) {
            // Handle sign-in errors
            console.error('Error during sign-in:', error);
            toast.error(`Error: ${error.message}`);
        }
    };

    const googleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const isNewUser = result.additionalUserInfo?.isNewUser;
            if (isNewUser) {
                toast.success('Thank you for signing up! A verification email has been sent.');
                sendEmailVerification(result.user);
            } else {
                toast.success('Welcome to Schedule Savvy!');
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/email-already-in-use') {
                toast.error('The email address is already in use by another account.');
            } else {
                toast.error(errorMessage);
            }
            console.error(error);
        }
    };

    return (
        <div id='signup_container'>
            <div className={`login_container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={onSubmitSignin}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input className='signup_input' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input className='signup_input' type={passwordVisible ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
                        </div>
                        <Link to="/forgetPassword"><p id='forget_pswd'>Forgot password?</p></Link>
                        <input type="submit" value="Login" className="btn" />
                        <p className="social-text">Or</p>
                        <div className="social-media">
                            <a onClick={googleAuth} href="#" className="social-icon">
                                <i className="fab fa-google" />
                                <p className='social-icon-text'>Sign in with Google</p>
                            </a>
                        </div>
                        <p className="account-text">
                            Don't have an account? <a href="#" onClick={() => setIsSignUpMode(true)} id="sign-up-btn2">Sign up</a>
                        </p>
                    </form>

                    <form className="sign-up-form" onSubmit={onSubmitSignup}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input className='signup_input' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope" />
                            <input className='signup_input' type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input className='signup_input' type={passwordVisible ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
                        </div>
                        <input type="submit" value="Sign up" className="btn" />
                        <p className="social-text">Or</p>
                        <div className="social-media">
                            <a onClick={googleAuth} href="#" className="social-icon">
                                <i className="fab fa-google" />
                                <p className='social-icon-text'>Sign in with Google</p>
                            </a>
                        </div>
                        <p className="account-text">
                            Already have an account? <a href="#" onClick={() => setIsSignUpMode(false)} id="sign-in-btn2">Sign in</a>
                        </p>
                    </form>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="signup_content">
                            <h3 className='signup_title'>Part of Schedule Savvy?</h3>
                            <p className='account_text'>Welcome back! Sign in to take charge of your day.</p>
                            <button className="btn" onClick={() => setIsSignUpMode(false)} id="sign-in-btn">Sign in</button>
                        </div>
                        <img src={signinSvg} alt="Sign in" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="signup_content">
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
