import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('theme_purple');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme_color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme_color', theme);
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, handleClick }}>
      <div className={`theme_container ${colorTheme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
