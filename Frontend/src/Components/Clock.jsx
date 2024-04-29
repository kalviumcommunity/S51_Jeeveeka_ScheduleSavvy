import React, { useState, useEffect } from 'react';
import '../Styles/Timer.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  return (
    <>
    <Navbar/>
      <div className='timer_main'>
        <div className='timer_container'>
          <div className='timer_content'>
            <h3 className='timer_title'>Digital Clock with Stopwatch and Timer</h3>
            <p className='timer_type'>Clock</p>
          </div>
          <div className='timer_outer_wrapper'>
            <div className='clock '>
              <div className="timer_wrapper">
                <div className='timer_main_container'>
                  <div className='hour'>
                    <p className='number' id='hour'>{formattedHours.toString().padStart(2, '0')}</p>
                    <p className='timer_times'>Hours</p>
                  </div>
                  <p className='colon'>:</p>
                  <div className='min'>
                    <p className='number' id='min'>{minutes.toString().padStart(2, '0')}</p>
                    <p className='timer_times'>Minutes</p>
                  </div>
                  <p className='colon'>:</p>
                  <div className='sec'>
                    <p className='number' id='sec'>{seconds.toString().padStart(2, '0')}</p>
                    <p className='timer_times'>Seconds</p>
                  </div>
                  <p className='colon'>:</p>
                  <div className='ampm'>
                    <p className='number' id='ampm'>{ampm}</p>
                  </div>
                </div>
              </div>
              <div className='timer_btns'>
                <Link to='/stopwatch'><button className='timer_btn'>Stopwatch</button></Link>
                <button className='timer_btn'>Timer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}