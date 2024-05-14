import React, { useEffect, useState } from 'react'
import '../Styles/Themes.css'

export default function Themes() {
    const [colorTheme,setColorTheme] = useState('theme_white')
    
    useEffect(()=>{
        const currentThemeColor = localStorage.getItem('theme_color')
        if (currentThemeColor){
            setColorTheme(currentThemeColor);
        }
    },[])

    const handleClick = (theme) =>{
        setColorTheme(theme)
        localStorage.setItem('theme_color', theme)
    }

  return (
    <div className={`theme_container ${colorTheme}`}>
        <div className='theme_options'>
            <div id='theme_white' className={`colorTheme`} onClick={()=>handleClick('theme_white')}></div>
            <div id='theme_blue' onClick={()=>handleClick('theme_blue')}></div>
            <div id='theme_orange' onClick={()=>handleClick('theme_orange')}></div>
            <div id='theme_purple' onClick={()=>handleClick('theme_purple')}></div>
            <div id='theme_green' onClick={()=>handleClick('theme_green')}></div>
            <div id='theme_black' onClick={()=>handleClick('theme_black')}></div>
        </div>

        <div className='theme_content_box'>
            <h3>Theme Switcher</h3>   
            <h5>React</h5> 
        </div>   
    </div>
  )
}
