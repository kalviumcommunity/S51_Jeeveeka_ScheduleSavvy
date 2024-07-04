import React, { useState } from 'react';
import '../Styles/Feedback.css';
import Navbar from './Navbar';
import { db } from '../Firebase/Firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feedback() {
  const [sent, setSent] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addClass = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      const feedbackData = {
        message: feedbackMessage,
        name: name,
        email: email
      };

      // Add feedback to Firestore collection
      const docRef = await addDoc(collection(db, 'feedback'), feedbackData);
      console.log('Feedback added with ID: ', docRef.id);

      // Update state or show success message
      setSent(true); // Example state update

      toast.success('Feedback sent successfully!');
    } catch (error) {
      console.error('Error adding feedback: ', error);
      toast.error('Failed to send feedback. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='feedback_form'>
        <div className={`wrapper centered ${sent ? 'sent' : ''}`}>
          <article className="letter">
            <div className="side">
              <h1 className='feedback_title'>Feedback</h1>
              <p className='feedback_text'>
                <textarea
                  className='feedback_textarea'
                  placeholder="Your message"
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  required
                />
              </p>
            </div>
            <div className="side">
              <p className='feedback_text'>
                <input
                  className='feedback_input'
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </p>
              <p className='feedback_text'>
                <input
                  className='feedback_input'
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
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
