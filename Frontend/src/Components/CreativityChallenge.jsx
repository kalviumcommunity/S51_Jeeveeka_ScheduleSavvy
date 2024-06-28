import React, { useState, useEffect } from 'react';
import '../Styles/Challenges.css';
import creativityImage from '../assets/creativity.jpg';
import { db } from '../Firebase/Firebase.config';
import { collection, doc, getDoc, setDoc, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const tasks = [
    'Tidy your workspace',
    'Take a different route',
    'Read a nonfiction book',
    'Start a dream journal',
    'Go to bed earlier',
    'Watch a film',
    'Try a new cuisine',
    'Listen to classical music',
    'Plan a holiday',
    'Practice yoga',
    'Try a DIY Project',
    'Watch the sunrise',
    'No phone day',
    'Self core day',
    'Start a workout routine',
    'Go out in nature',
    'Read a book',
    'Explore a new city',
    'Go outside your comfort zone',
    'Make moodboard',
    'Watch a movie',
    'Start a new hobby',
    'Make time for exercise',
    'Read a newspaper',
    'Watch the sunset',
    'Visit a museum',
    'Learn a new skill',
    'Create your ideal future',
    'Do nothing',
    'Cook a new dish'
];

const CreativityChallenge = () => {
  const [completedDays, setCompletedDays] = useState(new Array(30).fill(false));
  const completedCount = completedDays.filter(day => day).length;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'CreativityChallenge', 'userChallenge');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCompletedDays(docSnap.data().completedDays);
      }
    };
    fetchData();
  }, []);

  const toggleDay = async (index) => {
    const newCompletedDays = completedDays.map((day, i) => (i === index ? !day : day));
    setCompletedDays(newCompletedDays);

    // Update Firestore
    await setDoc(doc(db, 'CreativityChallenge', 'userChallenge'), {
      completedDays: newCompletedDays
    });
  };

  const resetChallenge = async () => {
    const newCompletedDays = new Array(30).fill(false);
    setCompletedDays(newCompletedDays);

    // Update Firestore
    await setDoc(doc(db, 'CreativityChallenge', 'userChallenge'), {
      completedDays: newCompletedDays
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>30 Day Creativity Challenge</h1>
        <div className="buttons">
          <button onClick={resetChallenge}>Reset</button>
          <Link to='/challenges'><button>Back</button></Link>
        </div>
      </div>
      <div className="content">
        <div className="left-section">
          <div className="progress-box">
            <p>Challenges Completed: {completedCount}</p>
            <p>Days to Go: {30 - completedCount}</p>
            <p>"Creativity is intelligence having fun!"</p>
          </div>
          <img src={creativityImage} alt="Creativity" />
        </div>
        <div className="challenge-container">
          {completedDays.map((completed, index) => (
            <div
              key={index}
              className={`challenges-day-box ${completed ? 'completed' : ''}`}
              onClick={() => toggleDay(index)}
            >
              <div className="challenges-day-content">
                <span className="challenges-day-number">{index + 1}</span>
                <span className="challenges-day-task">{tasks[index]}</span>
              </div>
              {completed && <div className="challenge-tick-mark">✓</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativityChallenge;
