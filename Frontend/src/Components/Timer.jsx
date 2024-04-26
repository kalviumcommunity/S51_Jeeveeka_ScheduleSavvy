// import React, { useState, useEffect } from 'react';
// import '../Styles/Timer.css';

// export default function Timer() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [stopwatchTime, setStopwatchTime] = useState(0);
//   const [stopwatchRunning, setStopwatchRunning] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     let interval;

//     if (stopwatchRunning) {
//       interval = setInterval(() => {
//         setStopwatchTime(prevTime => prevTime + 10);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [stopwatchRunning]);

//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   const formattedHours = hours % 12 || 12;

//   const formattedStopwatchTime = () => {
//     const totalMilliseconds = stopwatchTime;
//     const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
//     const totalSeconds = Math.floor(totalMilliseconds / 1000);
//     const seconds = totalSeconds % 60;
//     const minutes = Math.floor(totalSeconds / 60) % 60;
//     const hours = Math.floor(totalSeconds / 3600);

//     return { hours, minutes, seconds, milliseconds };
//   };

//   const { hours: stopwatchHours, minutes: stopwatchMinutes, seconds: stopwatchSeconds, milliseconds: stopwatchMilliseconds } = formattedStopwatchTime();

//   return (
//     <div className='timer_main'>
//       <div className='timer_container'>
//         <div className='timer_content'>
//           <h3 className='timer_title'>Digital Clock with Stopwatch and Timer</h3>
//           <p className='timer_type'>Clock</p>
//         </div>
//         <div className='timer_outer_wrapper'>
//           <div className='clock hidden'>
//             <div className="timer_wrapper">
//               <div className='timer_main_container'>
//                 <div className='hour'>
//                   <p className='number' id='hour'>{formattedHours.toString().padStart(2, '0')}</p>
//                   <p className='timer_times'>Hours</p>
//                 </div>
//                 <p className='colon'>:</p>
//                 <div className='min'>
//                   <p className='number' id='min'>{minutes.toString().padStart(2, '0')}</p>
//                   <p className='timer_times'>Minutes</p>
//                 </div>
//                 <p className='colon'>:</p>
//                 <div className='sec'>
//                   <p className='number' id='sec'>{seconds.toString().padStart(2, '0')}</p>
//                   <p className='timer_times'>Seconds</p>
//                 </div>
//                 <p className='colon'>:</p>
//                 <div className='ampm'>
//                   <p className='number' id='ampm'>{ampm}</p>
//                 </div>
//               </div>
//             </div>
//             <div className='timer_btns'>
//               <button className='timer_btn'>Stopwatch</button>
//               <button className='timer_btn'>Timer</button>
//             </div>
//           </div>
//           <div className='stopwatch'>
//             <div className='timer_wrapper'>
//                 <div className='timer_main_container'>
//                     <div className='hour'>
//                         <p className='number' id='stopwatch_hour'>{stopwatchHours.toString().padStart(2, '0')}</p>
//                         <p className='timer_times'>Hours</p>
//                     </div>
//                     <div className='min'>
//                         <p className='number' id='stopwatch_min'>{stopwatchMinutes.toString().padStart(2, '0')}</p>
//                         <p className='timer_times'>Minutes</p>
//                     </div>
//                     <div className='sec'>
//                         <p className='number' id='stopwatch_sec'>{stopwatchSeconds.toString().padStart(2, '0')}</p>
//                         <p className='timer_times'>Seconds</p>
//                     </div>
//                     <div className='miliseconds'>
//                         <p className='number' id='stopwatch_ms'>{stopwatchMilliseconds.toString().padStart(2, '0')}</p>
//                         <p className='timer_times'>Milliseconds</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='laps'>
//                 {/* <div className='lap active'>
//                     <p>Lap 2</p>
//                     <p>00.00</p>
//                 </div>
//                 <div className='lap'>
//                     <p>Lap 1</p>
//                     <p>00.00</p>
//                 </div> */}
//             </div>

//             <div className="timer_btns">
//                 <button className='timer_btn start-stopwatch'>Start</button>
//                 <button className='timer_btn lap-stopwatch hidden'>Lap</button>
//                 <button className='timer_btn stopwatch_reset'>Reset</button>
//                 <button className='timer_btn timer_back'>Back</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import '../Styles/Timer.css';

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  const [stopwatchTime, setStopwatchTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

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

  const toggleLapDisplay = () => {
    const lapBtn = document.querySelector('.lap-stopwatch');
    const startBtn = document.querySelector('.start-stopwatch');
    const lapContainer = document.querySelector('.laps');

    lapBtn.classList.toggle('hidden');
    startBtn.classList.toggle('hidden');
    lapContainer.classList.toggle('hidden');
  };

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  return (
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
              <button className='timer_btn'>Stopwatch</button>
              <button className='timer_btn'>Timer</button>
            </div>
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
            <div className='laps hidden'>
              {lapTimes.map((lapTime, index) => (
                <div key={index} className='lap'>
                  <p>Lap {index + 1}</p>
                  <p>{lapTime}</p>
                </div>
              ))}
            </div>
            <div className="timer_btns">
              <button className='timer_btn start-stopwatch' onClick={() => {startStopwatch(); toggleLapDisplay();}}>Start</button>
              <button className='timer_btn lap-stopwatch hidden' onClick={() => {lapStopwatch(); toggleLapDisplay();}}>Lap</button>
              <button className='timer_btn stopwatch_reset' onClick={resetStopwatch}>Reset</button>
              <button className='timer_btn timer_back'>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
