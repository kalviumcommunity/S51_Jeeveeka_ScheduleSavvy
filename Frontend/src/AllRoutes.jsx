import React, { useMemo } from 'react';
import Home from './Components/Home';
import Signup from './Components/Signup';
import TitlePage from './Components/TitlePage';
import Layout from './Components/Layout';
import ForgetPassword from './Components/ForgetPassword';
import Feedback from './Components/Feedback';
import AboutUs from './Components/AboutUs';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import Clock from './Components/Clock';
import Pomodoro from './Components/Pomodoro';
import ContactUs from './Components/ContactUs';
import CrispChat from './Components/Chat';
import Themes from './Components/Themes';
import SelfCareChallenge from './Components/SelfcareChallenge';
import CreativityChallenge from './Components/CreativityChallenge';
import { Route, Routes } from 'react-router-dom';
import Music from './Components/MusicPlatform/Music';
import Challenges from './Components/Challenges';

function AllRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout><TitlePage /></Layout>} />
        <Route path="/signup" element={<Layout><Signup/></Layout>} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path='/home' element={<Layout><Home/></Layout>}></Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/clock" element={<Clock />} />          
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />  
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/chat" element={<CrispChat />} />
        <Route path="/theme" element={<Themes />} />
        <Route path="/selfcare" element={<SelfCareChallenge />} />
        <Route path="/creativity" element={<CreativityChallenge />} />
        <Route path='/musicplayer' element={<Music/>}></Route>
        <Route path='/challenges' element={<Challenges/>}></Route>
      </Routes>
  );
}

export default AllRoutes;
