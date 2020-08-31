import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../contexts/theme';

const Nav = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <nav className='nav-bar'>
                <ul className='nav-items'>
                    <NavLink 
                        to='/' 
                        activeClassName='active'
                        exact
                    >
                        Top
                    </NavLink>
                    <NavLink 
                        to='/new' 
                        activeClassName='active'
                        exact
                    >
                        New
                    </NavLink>
                </ul>
                <button 
                    className='theme-btn'
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? '🔦' : '💡'}
                </button>
            </nav>
        )}
    </ThemeContext.Consumer>
);

export default Nav;
