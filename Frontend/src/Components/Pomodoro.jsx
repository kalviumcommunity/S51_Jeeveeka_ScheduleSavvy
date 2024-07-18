import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Pomodoro.css';
import { Link } from 'react-router-dom';

export default function Pomodoro() {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [status, setStatus] = useState('session');
  const alarmRef = useRef(null);

  useEffect(() => {
    setTime(sessionMinutes * 60);
  }, [sessionMinutes]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeOn && time > 0) {
        setTime(prevTime => prevTime - 1);
      } else if (timeOn && time === 0) {
        alarmRef.current.play();
        switchMode();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeOn, time]);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    setSeconds(seconds);
  }, [time]);

  const switchMode = () => {
    setStatus(prevStatus => (prevStatus === 'session' ? 'break' : 'session'));
    const newStatus = status === 'session' ? 'break' : 'session';
    if (newStatus === 'session') {
      setTime(sessionMinutes * 60); // Set the time to session duration if switching to session mode
    } else {
      setTime(breakMinutes * 60); // Set the time to break duration if switching to break mode
    }
  };

  const resetTimer = () => {
    setTime(status === 'session' ? sessionMinutes * 60 : breakMinutes * 60);
    setTimeOn(false);
  };

  const toggleTimer = () => {
    setTimeOn(prevTimeOn => !prevTimeOn);
  };

  const decrementSessionMinutes = () => {
    if (sessionMinutes > 1) {
      setSessionMinutes(prevMinutes => prevMinutes - 1);
    }
  };

  const incrementSessionMinutes = () => {
    if (sessionMinutes < 60) {
      setSessionMinutes(prevMinutes => prevMinutes + 1);
    }
  };

  const decrementBreakMinutes = () => {
    if (breakMinutes > 1) {
      setBreakMinutes(prevMinutes => prevMinutes - 1);
    }
  };

  const incrementBreakMinutes = () => {
    if (breakMinutes < 60) {
      setBreakMinutes(prevMinutes => prevMinutes + 1);
    }
  };

  return (
    <>
      <div className="pomo clearfix">
        <div className="pomo_session">
          <span className="pomo_subtitle">Session</span>
          <i className="fa fa-minus-circle" onClick={decrementSessionMinutes}></i> &nbsp; <span>{sessionMinutes}</span> &nbsp; <i className="fa fa-plus-circle" onClick={incrementSessionMinutes}></i>
        </div>
        <div className="pomo_break">
          <span className="pomo_subtitle">Break</span>
          <i className="fa fa-minus-circle" onClick={decrementBreakMinutes}></i> &nbsp; <span>{breakMinutes}</span> &nbsp; <i className="fa fa-plus-circle" onClick={incrementBreakMinutes}></i>
        </div>
      </div>
      <div className={`pomodoro ${status}`}>
        <div className="pomo_title">POMODORO CLOCK</div>
        <div className="pomo_status">{status}</div>
        <div className="pomo_timer">
          {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <button className="pomo_button" id="switch" onClick={switchMode}><i className="fa fa-exchange"></i></button>
        <button className="pomo_button" id="reset" onClick={resetTimer}><i className="fa fa-refresh"></i></button>
        <button className="pomo_button" id="toggle" onClick={toggleTimer}><i className={`fa ${timeOn ? 'fa-pause' : 'fa-play'}`}></i></button>
      </div>
      <div className='pomo_container'>
        <Link to='/clock'><button className='pomo_back_button'>BACK</button></Link>
      </div>
      <audio ref={alarmRef} src="/alarm.mp3"></audio>
    </>
  );
}
