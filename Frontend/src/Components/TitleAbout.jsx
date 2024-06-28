import React from 'react';
import '../Styles/Tailwind.css';
import AboutImg1 from '../assets/About_img1.png';
import AboutImg2 from '../assets/About_img2.png';

export default function TitleAbout() {
  return (
    <div id="titleAbout" className='md:px-10 p-1 max-w-s mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mr-5 p-5'>
        <div className='md:w-1/2'>
          <img src={AboutImg1} alt='AboutImg1' />
        </div>
        <div className='md:w-2/5'>
          <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>
            Ease in planning your day: <span className='text-secondary'>Our Mission</span>
          </h2>
          <p className='text-tertiary text-lg mb-7'>
            Our mission is to empower you with tools for efficient task planning and management. We aim to help you prioritize and track your tasks seamlessly, optimizing your productivity.
          </p>
          <button className='btnPrimary'>Let's Go</button>
        </div>
      </div>
      <div className='h-10'></div>
      <div className='md:px-10 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ml-5'>
        <div className='md:w-1/2'>
          <img src={AboutImg2} alt='AboutImg2' />
        </div>
        <div className='md:w-2/5'>
          <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>
            Your Discussion Hub:<span className='text-secondary'>  Our Vision </span>
          </h2>
          <p className='text-tertiary text-lg mb-7'>
            Connect, Share, and Grow: Join the Conversation in Our Social Platform!
          </p>
          <button className='btnPrimary'>Let's Go</button>
        </div>
      </div>
    </div>
  );
}
