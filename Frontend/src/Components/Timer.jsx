import React, { useState, useEffect } from 'react';
import '../Styles/Timer.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Modal from './Modal'; // 

export default function Timer() {
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerDuration, setTimerDuration] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const startTimer = () => {
        if (!timerStarted) {
            setShowModal(true); // Show the modal when the start button is clicked for the first time
        } else {
            setTimerRunning(true); // If timer has been started, resume it without asking for input
        }
    };

    const handleSave = (durationInput) => {
        try {
            const durationInMinutes = parseInt(durationInput);
            if (!isNaN(durationInMinutes) && durationInMinutes > 0 && durationInMinutes <= 2000) {
                const remainingTime = timerDuration > 0 ? timerDuration : durationInMinutes * 60000;
                setTimerDuration(remainingTime);
                setTimerRunning(true);
                setTimerStarted(true);
                setShowModal(false); // Hide the modal after saving the input
            } else {
                alert("Invalid input. Please enter a valid duration in minutes (not exceeding 2000 minutes).");
            }
        } catch (error) {
            alert("Error parsing input. Please enter a valid duration in minutes.");
        }
    };

    const stopTimer = () => {
        setTimerRunning(false);
    };

    const resetTimer = () => {
        setTimerRunning(false);
        setTimerDuration(0);
        setTimerStarted(false);
    };

    useEffect(() => {
        let intervalId;
        if (timerRunning) {
            intervalId = setInterval(() => {
                setTimerDuration(prevDuration => prevDuration - 1000);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [timerRunning]);

    const formattedTime = () => {
        const totalMilliseconds = timerDuration;
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
        const totalSeconds = Math.floor(totalMilliseconds / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);

        return {
            formattedHours: hours.toString().padStart(2, '0'),
            formattedMinutes: minutes.toString().padStart(2, '0'),
            formattedSeconds: seconds.toString().padStart(2, '0'),
            formattedMilliseconds: milliseconds.toString().padStart(2, '0')
        };
    };

    const { formattedHours, formattedMinutes, formattedSeconds, formattedMilliseconds } = formattedTime();

    return (
        <>
            <Navbar />
            <div className='timer_main'>
                <div className='timer_container'>
                    <div className='timer_content'>
                        <p className='timer_type'>Timer</p>
                    </div>
                    <div className='timer'>
                        <div className='timer_wrapper'>
                            <div className='timer_main_container'>
                                <div className='hour'>
                                    <p className='number' id='timer_hour'>{formattedHours}</p>
                                    <p className='timer_times'>Hours</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='min'>
                                    <p className='number' id='timer_min'>{formattedMinutes}</p>
                                    <p className='timer_times'>Minutes</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='sec'>
                                    <p className='number' id='timer_sec'>{formattedSeconds}</p>
                                    <p className='timer_times'>Seconds</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='miliseconds'>
                                    <p className='number' id='timer_ms'>{formattedMilliseconds}</p>
                                    <p className='timer_times'>Milliseconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="timer_btns">
                            {!timerRunning && <button className='timer_btn start-timer' onClick={startTimer}>Start</button>}
                            {timerRunning && <button className='timer_btn stop-timer' onClick={stopTimer}>Stop</button>}
                            <button className='timer_btn timer_reset' onClick={resetTimer}>Reset</button>
                            <Link to='/clock'><button className='timer_btn timer_back'>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} onSave={handleSave} />
        </>
    );
}
