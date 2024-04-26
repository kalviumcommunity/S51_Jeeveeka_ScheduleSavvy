import React from 'react'
import '../Styles/Timer.css'

export default function () {
  return (
    <div className='timer_main'>
        <div className='timer_container'>
        <div className='timer_content'>
            <h3 className='timer_title'>Digital Clock with Stopwatch and Timer</h3>
            <p className='timer_type'>Clock</p>
        </div>
        <div className='timer_outer_wrapper'>
            <div className='clock'>
                <div className="timer_wrapper">
                    <div className='timer_main_container'>
                        <div className='hour'>
                            <p className='number' id='hour'>02</p>
                            <p>Hours</p>
                        </div>
                        <p className='colon'>:</p>
                        <div className='min'>
                            <p className='number' id='min'>02</p>
                            <p>Minutes</p>
                        </div>
                        <p className='colon'>:</p>
                        <div className='sec'>
                            <p className='number' id='sec'>02</p>
                            <p>Seconds</p>
                        </div>
                        <p className='colon'>:</p>
                        <div className='ampm'>
                            <p className='number' id='ampm'>AM</p>
                            <p className='other-ampm'>PM</p>
                        </div>
                    </div>
                </div>
                <div className='timer_btns'>
                    <button className='timer_btn'>Stopwatch</button>
                    <button className='btn'>Timer</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
