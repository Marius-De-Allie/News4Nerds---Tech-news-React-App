import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleUp, FaStar } from 'react-icons/fa';
import ThemeButtonWithHover from './ThemeButton';
import ThemeContext from '../contexts/theme';


const Nav = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <nav className='nav-bar'>
                <ul className='nav-items'>
                    <NavLink 
                        to='/' 
                        activeClassName='active'
                        className={`nav-links text-${theme}`}
                        exact
                    >
                    <FaAngleDoubleUp />
                        {` Top`}
                    </NavLink>
                    <NavLink 
                        to='/new' 
                        activeClassName='active '
                        className={`nav-links text-${theme}`}                   
                        exact
                    >
                    <FaStar />
                        {` New`}
                    </NavLink>
                </ul>
                <ThemeButtonWithHover />
            </nav>
        )}
    </ThemeContext.Consumer>
);

export default Nav;
