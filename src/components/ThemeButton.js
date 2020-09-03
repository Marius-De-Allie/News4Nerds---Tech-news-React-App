import React from 'react';
import ThemeContext from '../contexts/theme';
// withHover HOC.
import withHover from './withHover';

const ThemeButton = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <button className='theme-btn' onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>
    )}
  </ThemeContext.Consumer>
);

export default withHover(ThemeButton);