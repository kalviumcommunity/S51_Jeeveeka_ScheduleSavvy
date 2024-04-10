import React from 'react'
import '../Styles/TitlePage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function TitlePage() {
  return (
    <div id='title_container'>
        <nav id='title_nav'>
            <img id='logo_title' src={logo} alt="logo" />
            <Link to='/signup'><p className='signup'>Let's Start</p></Link>
            <div id="indicator"></div>
        </nav>
        <div>

        </div>
    </div>
  )
}
