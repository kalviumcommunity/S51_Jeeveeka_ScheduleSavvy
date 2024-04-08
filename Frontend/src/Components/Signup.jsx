import React from 'react'
import '../Styles/Signup.css'

export default function Signup() {
  return (
    <div className='main'>
      <input type='checkbox' id='chk' aria-hidden="true"/>
      <div className='signup'>
        <form>
            <label htmlFor="chk" aria-hidden='true'>Sign up</label>
            <input type="text" name='txt' placeholder='User Name' required="" />
            <input type="email" name='email' placeholder='Email' required="" />
            <input type="Password" name='pswd' placeholder='Password' required="" />
            <button>Sign up</button>
        </form>
      </div>
      <div className='login'>
        <form>
            <label htmlFor="chk">Login</label>
            <input type="email" name='email' placeholder='Email' required="" />
            <input type="Password" name='pswd' placeholder='Password' required="" />
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}
