import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus_container">
      <h1 id='about_main' className='about_title'><strong>About Us</strong></h1>
      <p className='about_para'>Welcome to <strong>Schedule Savvy</strong>, your ultimate productivity companion designed to help you master your day and achieve your goals with ease. We believe there’s an untapped potential in each of us. <br /> <br /> We believe we’re all capable of living a life of balance, getting everything done without sacrificing peace of mind.We’re building the tools and services to help us all do more with ease and keep life under control.Productivity made easy. Balance made possible. Life under control.</p>
      <hr />
      <h2 className='about_title'><strong>Our Mission</strong></h2>
      <p className='about_para'>Our mission is simple: to empower individuals to take control of their time and productivity. We believe that with the right tools and mindset, anyone can unlock their full potential and accomplish their dreams.</p>
      <hr />
      <h2 className='about_title'><strong>What Sets Us Apart</strong></h2>
      <ul id='aboutus_points_container'>
        <li className='aboutus_points'><strong>Intuitive Task Management:</strong> Our platform offers a seamless task scheduling and completion system, allowing you to prioritize and organize your tasks effortlessly.</li>
        <li className='aboutus_points'><strong>Social Media Dashboard:</strong> Keep track of your social media usage and stay mindful of your screen time with our integrated social media dashboard.</li>
        <li className='aboutus_points'><strong>Pomodoro and Focus Modes:</strong> Boost your productivity with our Pomodoro and Focus modes, designed to help you stay focused and productive during work sessions.</li>
        <li className='aboutus_points'><strong>Theme Customization:</strong> Personalize your experience with customizable themes, allowing you to tailor the app to your preferences and style.</li>
      </ul>
      <hr />
      <h2 className='about_title'><strong>Get in Touch</strong></h2>
      <p className='about_para'>Ready to take your productivity to the next level? Join the <strong>Schedule Savvy</strong> community today and start achieving your goals with confidence.</p>
    </div>
  );
};

export default AboutUs;
