import React from 'react';

const ThemeButton = props = <button className='theme-btn'onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>;

export default ThemeButton;