import React from 'react'
import '../Styles/TitlePage.css'

export default function TitlePage() {
  return (
    <div id='title_container'>
        <nav id='title_nav'>
            <p className='signup'>SIGNUP</p>
            <p className='signup'>LOGIN</p>
            <div id="indicator"></div>
        </nav>
    </div>
  )
}
