import React from 'react';
import '../Styles/ChallengesMain.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Challenges = () => {
  return (
    <>
    <Navbar/>
    <div className="challenges_container">
    <h1 className='challenges_title'>Challenges</h1>
      <div className="box-container">
        <Link to='/selfcare'><div className="box">
          <h2 className='challenges_subtitle'>Selfcare Challenge</h2>
          <p>Lets care for ourself a little more!</p>
        </div></Link>
        <Link to='/creativity'><div className="box">
          <h2 className='challenges_subtitle'>Creativity Challenge</h2>
          <p>Get to know the limitless bounds of your creativity!</p>
        </div></Link>
      </div>
    </div>
    </>
  );
}

export default Challenges;
