import React from 'react';
import ThemeContext from '../contexts/theme';

const ThemeButton = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <button className='theme-btn' onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>
    )}
  </ThemeContext.Consumer>
);

export default ThemeButton;