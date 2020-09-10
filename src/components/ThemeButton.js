import React, { useContext } from 'react';
import ThemeContext from '../contexts/theme';

const ThemeButton = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      <button className='theme-btn' onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>
    </React.Fragment>
  );
};

export default ThemeButton;