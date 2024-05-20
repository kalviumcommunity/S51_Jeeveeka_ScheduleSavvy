import React, { useContext } from 'react';
import '../Styles/Themes.css';
import { ThemeContext } from '../Components/ThemeProvider';

export default function Themes() {
  const { colorTheme, handleClick } = useContext(ThemeContext);

  return (
    <div className='theme_options'>
      <div id='theme_white' className={`${colorTheme === 'theme_white' ? 'active' : ''}`} onClick={() => handleClick('theme_white')}></div>
      <div id='theme_blue' className={`${colorTheme === 'theme_blue' ? 'active' : ''}`} onClick={() => handleClick('theme_blue')}></div>
      <div id='theme_orange' className={`${colorTheme === 'theme_orange' ? 'active' : ''}`} onClick={() => handleClick('theme_orange')}></div>
      <div id='theme_purple' className={`${colorTheme === 'theme_purple' ? 'active' : ''}`} onClick={() => handleClick('theme_purple')}></div>
      <div id='theme_green' className={`${colorTheme === 'theme_green' ? 'active' : ''}`} onClick={() => handleClick('theme_green')}></div>
      <div id='theme_black' className={`${colorTheme === 'theme_black' ? 'active' : ''}`} onClick={() => handleClick('theme_black')}></div>
    </div>
  );
}
