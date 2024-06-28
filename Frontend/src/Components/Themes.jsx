import React, { useContext } from 'react';
import '../Styles/Themes.css';
import { ThemeContext } from '../Components/ThemeProvider';
import Navbar from './Navbar';

export default function Themes() {
  const { colorTheme, handleClick } = useContext(ThemeContext);

  return (
    <>
    <Navbar/>
    <div className='theme_options'>
      <div id='theme_white' className={`theme_option ${colorTheme === 'theme_white' ? 'active' : ''}`} onClick={() => handleClick('theme_white')}>
        <div className="theme_name">White</div>
      </div>
      <div id='theme_blue' className={`theme_option ${colorTheme === 'theme_blue' ? 'active' : ''}`} onClick={() => handleClick('theme_blue')}>
        <div className="theme_name">Blue</div>
      </div>
      <div id='theme_orange' className={`theme_option ${colorTheme === 'theme_orange' ? 'active' : ''}`} onClick={() => handleClick('theme_orange')}>
        <div className="theme_name">Orange</div>
      </div>
      <div id='theme_purple' className={`theme_option ${colorTheme === 'theme_purple' ? 'active' : ''}`} onClick={() => handleClick('theme_purple')}>
        <div className="theme_name">Purple</div>
      </div>
      <div id='theme_green' className={`theme_option ${colorTheme === 'theme_green' ? 'active' : ''}`} onClick={() => handleClick('theme_green')}>
        <div className="theme_name">Green</div>
      </div>
      <div id='theme_black' className={`theme_option ${colorTheme === 'theme_black' ? 'active' : ''}`} onClick={() => handleClick('theme_black')}>
        <div className="theme_name">Black</div>
      </div>
    </div>
    </>
  );
}
