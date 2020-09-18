import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaAngleDoubleUp, FaStar, FaGlobe } from 'react-icons/fa';
import ThemeButton from './ThemeButton';
import TooltipWithHover from './Tooltip';
import ThemeContext from '../contexts/theme';


const Nav = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);
    const history = useHistory();

    return (
        <nav className='nav-bar'>
            <FaGlobe id='logo' size={65} onClick={() => history.push('/')} />
            <div className='nav-container'>
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
                    <ThemeButton className='theme-btn' toggleTheme={toggleTheme} />
                </TooltipWithHover>
            </div>
        </nav>
    );
};

export default Nav;
