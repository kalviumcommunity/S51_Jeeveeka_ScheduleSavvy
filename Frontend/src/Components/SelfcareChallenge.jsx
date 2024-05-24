import React, { useState, useEffect } from 'react';
import '../Styles/SelfcareChallenge.css';
import selfcareImage from '../assets/selfcare.jpg';
import { db } from '../Firebase/Firebase.config';
import { collection, doc, getDoc, setDoc, getDocs } from 'firebase/firestore';

const tasks = [
  'Meditate for 10 minutes',
  'Take a nature walk',
  'Write in a journal',
  'Do a yoga session',
  'Read a book for 30 minutes',
  'Cook a healthy meal',
  'Call a friend or family member',
  'Practice deep breathing exercises',
  'Spend time on a hobby',
  'Declutter a small space',
  'Take a long bath',
  'Listen to your favorite music',
  'Go to bed early',
  'Drink 8 glasses of water',
  'Spend time in the sun',
  'Do a digital detox',
  'Practice gratitude',
  'Try a new recipe',
  'Do a random act of kindness',
  'Watch a feel-good movie',
  'Stretch for 15 minutes',
  'Write down your goals',
  'Spend time with pets',
  'Plan a fun outing',
  'Do something creative',
  'Take a nap',
  'Limit screen time',
  'Practice positive affirmations',
  'Spend time gardening',
  'Reflect on your achievements'
];

const SelfCareChallenge = () => {
  const [completedDays, setCompletedDays] = useState(new Array(30).fill(false));
  const completedCount = completedDays.filter(day => day).length;

  useEffect(() => {
    // Fetch initial state from Firestore
    const fetchData = async () => {
      const docRef = doc(db, 'selfCareChallenge', 'userChallenge');
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
    await setDoc(doc(db, 'selfCareChallenge', 'userChallenge'), {
      completedDays: newCompletedDays
    });
  };

  const resetChallenge = async () => {
    const newCompletedDays = new Array(30).fill(false);
    setCompletedDays(newCompletedDays);

    // Update Firestore
    await setDoc(doc(db, 'selfCareChallenge', 'userChallenge'), {
      completedDays: newCompletedDays
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>30 Day Self-Care Challenge</h1>
        <div className="buttons">
          <button onClick={resetChallenge}>Reset</button>
          <button>Back</button>
        </div>
      </div>
      <div className="content">
        <div className="left-section">
          <div className="progress-box">
            <p>Challenges Completed: {completedCount}</p>
            <p>Days to Go: {30 - completedCount}</p>
            <p>"Keep going, you're doing great!"</p>
          </div>
          <img src={selfcareImage} alt="Self Care" />
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

export default SelfCareChallenge;
