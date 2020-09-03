import React from 'react';
import ThemeContext from '../contexts/theme';


const ThemeButton = props => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <React.Fragment>
        <button className='theme-btn' onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
);

export default ThemeButton;