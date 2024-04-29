import React, { useEffect, useState } from 'react'
import '../Styles/Timer.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Stopwatch() {
    const [stopwatchRunning, setStopwatchRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState([]);
    const [stopwatchTime, setStopwatchTime] = useState(0);

    useEffect(() => {
        let intervalId;
        if (stopwatchRunning) {
          intervalId = setInterval(() => {
            setStopwatchTime(prevTime => prevTime + 10);
          }, 10);
        } else {
          clearInterval(intervalId);
        }
    
        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [stopwatchRunning]);

    const startStopwatch = () => {
        setStopwatchRunning(true);
    };

    const resetStopwatch = () => {
        setStopwatchRunning(false);
        setStopwatchTime(0);
        setLapTimes([]);
    };

    const lapStopwatch = () => {
        const lapTime = formattedStopwatchTime();
        setLapTimes([...lapTimes, lapTime]);
    };

    const formattedStopwatchTime = () => {
        const totalMilliseconds = stopwatchTime;
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
        const totalSeconds = Math.floor(totalMilliseconds / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    };    

    return (
        <>
            <Navbar />
            <div className='timer_main'>
                <div className='timer_container'>
                    <div className='timer_content'>
                        <p className='timer_type'>Stopwatch</p>
                    </div>
                    <div className='stopwatch'>
                        <div className='timer_wrapper'>
                            <div className='timer_main_container'>
                                <div className='hour'>
                                    <p className='number' id='stopwatch_hour'>{(stopwatchTime / 3600000).toFixed(0).padStart(2, '0')}</p>
                                    <p className='timer_times'>Hours</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='min'>
                                    <p className='number' id='stopwatch_min'>{((stopwatchTime % 3600000) / 60000).toFixed(0).padStart(2, '0')}</p>
                                    <p className='timer_times'>Minutes</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='sec'>
                                    <p className='number' id='stopwatch_sec'>{((stopwatchTime % 60000) / 1000).toFixed(0).padStart(2, '0')}</p>
                                    <p className='timer_times'>Seconds</p>
                                </div>
                                <p className='colon'>:</p>
                                <div className='miliseconds'>
                                    <p className='number' id='stopwatch_ms'>{((stopwatchTime % 1000) / 10).toFixed(0).padStart(2, '0')}</p>
                                    <p className='timer_times'>Milliseconds</p>
                                </div>
                            </div>
                        </div>
                        <div className='laps'>
                            {lapTimes.map((lapTime, index) => (
                                <div key={index} className='lap'>
                                    <p>Lap {index + 1}</p>
                                    <p>{lapTime}</p>
                                </div>
                            ))}
                        </div>
                        <div className="timer_btns">
                            {!stopwatchRunning && <button className='timer_btn start-stopwatch' onClick={startStopwatch}>Start</button>}
                            {stopwatchRunning && <button className='timer_btn lap-stopwatch' onClick={lapStopwatch}>Lap</button>}
                            <button className='timer_btn stopwatch_reset' onClick={resetStopwatch}>Reset</button>
                            <Link to='/clock'><button className='timer_btn timer_back'>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
