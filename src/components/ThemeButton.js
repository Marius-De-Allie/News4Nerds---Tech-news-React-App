import React from 'react';
import ThemeContext from '../contexts/theme';
// withHover HOC.
import withHover from './withHover';

const ThemeButton = props => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <React.Fragment>
        {props.hovering && <span>{`🧨`}</span>}
        <button className='theme-btn' onClick={toggleTheme}>{theme === 'light' ? '🔦' : '💡'}</button>
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
);

export default withHover(ThemeButton);