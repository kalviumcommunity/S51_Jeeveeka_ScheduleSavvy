import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Signup'
import TitlePage from './Components/TitlePage'
import Layout from './Components/Layout'
import ForgetPassword from './Components/ForgetPassword'
import Feedback from './Components/Feedback'
import AboutUs from './Components/AboutUs'
import Stopwatch from './Components/Stopwatch'
import Timer from './Components/Timer'
import Clock from './Components/Clock'
import Pomodoro from './Components/Pomodoro'
import ContactUs from './Components/ContactUs'
import CrispChat from './Components/Chat'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TitlePage/>}></Route>
            <Route path='/signup' element={<Layout><Signup/></Layout>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
            <Route path='/feedback' element={<Feedback/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            <Route path='/clock' element={<Clock/>}></Route>          
            <Route path='/stopwatch' element={<Stopwatch/>}></Route>
            <Route path='/timer' element={<Timer/>}></Route>  
            <Route path='/pomodoro' element={<Pomodoro/>}></Route>
            <Route path='/contactus' element={<ContactUs/>}></Route>
            <Route path='/chat' element={<CrispChat/>}></Route>
        </Routes>
    </div>
  )
}
