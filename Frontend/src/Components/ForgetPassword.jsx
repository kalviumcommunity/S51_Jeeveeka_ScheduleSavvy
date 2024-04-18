import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate=useNavigate();

  const handleForgetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setTimeout(() => {
        toast.info('Password reset email sent. Please check your inbox.');
      }, 1000); 
      navigate('/signup')

    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the password reset email. Please try again.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen" >
      <div className="w-full max-w-md p-8  bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
            value={email}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
          />
        </div>
        <button className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleForgetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default ForgetPassword;