import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleUp, FaStar } from 'react-icons/fa';
import ThemeButton from './ThemeButton';
import TooltipWithHover from './Tooltip';
import ThemeContext from '../contexts/theme';


const Nav = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);

    return (
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
            <TooltipWithHover tooltip='Switch theme dark\light'>
                <ThemeButton toggleTheme={toggleTheme} />
            </TooltipWithHover>
        </nav>
    );
};

export default Nav;
