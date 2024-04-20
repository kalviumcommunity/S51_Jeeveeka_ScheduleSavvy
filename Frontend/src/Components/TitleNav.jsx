import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/Tailwind.css';
import logo from '../assets/Logo.png'

export default function TitleNav() {
    const navigate = useNavigate(); 
    const handleGetStarted = () => {
        navigate('/signup');
    };

    return (
        <nav id="title_nav">
            <div className="flex justify-between px-5 py-5">
                <img className="w-32" src={logo} alt="logo" />
                <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-indigo-600" onClick={handleGetStarted} >Get Started</button>
            </div>
        </nav>
    );
}
