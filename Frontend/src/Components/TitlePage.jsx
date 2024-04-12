import React from 'react'
import '../Styles/TitlePage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import gif from '../assets/gif1.gif'
import template1 from '../assets/template_pic1.png'
import template2 from '../assets/template_pic2.png'
import template3 from '../assets/template_pic3.png'
import gif2 from '../assets/gif2.gif'
import testimonial1 from '../assets/testimonial1.png'
import Footer from './Footer'


export default function TitlePage() {
  return (
    <>
      <div id='title_container'>
          <nav id='title_nav'>
              <img id='logo_title' src={logo} alt="logo" />
              <Link to='/signup'><p className='signup'>Let's Start</p></Link>
              <div id="indicator"></div>
          </nav>
      </div>
      <div id='title1'>
        <img id='planner_gif' src={gif} alt="planner_gif" />
        <div id='title_innerdiv1'>
            <h1>Plan your day and have fun at the same time!</h1>
            <button id='title_button'>View More</button>
        </div>
      </div>
      <br />
      <div id='title2'>
      <h2 id="tp_subtitle">
        The simplest <span id="highlight">scheduling</span> app
      </h2>
        <div className='tp_box'>
          <img className='tp_images' src={template1} alt="template1" />
          <h3 className='tp_content'>Plan your day</h3>
          <p className='tp_content'>Streamline your day with intuitive task scheduling and prioritization.</p>
        </div>
        <div className='tp_box'>
          <img className='tp_images' src={template2} alt="template2" />
          <h3 className='tp_content'>Profile customisation</h3>
          <p className='tp_content'>Personalize your profile with custom themes for an optimized planning experience.</p>
        </div>
        <div className='tp_box'> 
          <img className='tp_images' src={template3} alt="template3" />
          <h3 className='tp_content'>Track your progress</h3>
          <p className='tp_content'>Monitor your achievements with detailed progress tracking and insightful analytics.</p>
        </div>
      </div>
      <br />
      <div id='title3'>
        <div id='title_innerdiv2'>
            <h1>Your Day, Your Way: Master productivity with ease!</h1>
        </div>
        <img id='template4' src={gif2} alt="template4" />
      </div>
      <br />
      <div id='title4'>
        <div class="heading">
            <h4 class="subtitle">WHAT THEY SAY ABOUT US</h4>
            <h1 class="title">Testimonials</h1>
        </div>
        <div class="testimonial">
            <img class="testimonial-image" src={testimonial1} alt="testimonial1" />
            <div class="testimonial-content">
                <h3 class="testimonial-text">"ScheduleSavvy has transformed my daily routine! Its intuitive design and powerful features help me stay organized and productive every day."</h3>
                <p class="testimonial-author">- Sreelakshmi</p>
            </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}
