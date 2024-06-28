import React, { useState } from 'react';
import '../Styles/Feedback.css';
import Navbar from './Navbar';

function Feedback() {
  const [sent, setSent] = useState(false);

  const addClass = () => {
    setSent(true);
  };

  return (
    <>
    <Navbar/>
    <div className='feedback_form'>
        <div className={`wrapper centered ${sent ? 'sent' : ''}`}>
        <article className="letter">
            <div className="side">
            <h1 className='feedback_title'>Feedback</h1>
            <p className='feedback_text'>
                <textarea className='feedback_textarea' placeholder="Your message"></textarea>
            </p>
            </div>
            <div className="side">
            <p className='feedback_text'>
                <input className='feedback_input' type="text" placeholder="Your name" />
            </p>
            <p className='feedback_text'>
                <input className='feedback_input' type="email" placeholder="Your email" />
            </p>
            <p className='feedback_text'>
                <button className='feedback_button' id="sendLetter" onClick={addClass}>Send</button>
            </p>
            </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
        <p className="result-message centered">Thank you for your feedback!</p>
        </div>
    </div>
    </>
  );
}

export default Feedback;
