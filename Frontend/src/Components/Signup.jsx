import React from 'react'
import '../Styles/Signup.css'

export default function Signup() {
  return (
    <div className='mainpage'>
        <div className='main'>
        <input type='checkbox' id='chk' aria-hidden="true"/>
        <div className='signup'>
            <form>
                <label className="signup_label" htmlFor="chk" aria-hidden='true'>Sign up</label>
                <input className='signup_input' type="text" name='txt' placeholder='User Name' required="" />
                <input className='signup_input' type="email" name='email' placeholder='Email' required="" />
                <input className='signup_input' type="Password" name='pswd' placeholder='Password' required="" />
                <button className='signup_button'>Sign up</button>
            </form>
        </div>
        <div className='login'>
            <form>
                <label className="signup_label" htmlFor="chk">Login</label>
                <input className='signup_input' type="email" name='email' placeholder='Email' required="" />
                <input className='signup_input' type="Password" name='pswd' placeholder='Password' required="" />
                <button className='signup_button'>Login</button>
            </form>
        </div>
        </div>
    </div>
  )
}
