import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className='nav-bar'>
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
            onClick={() => {}}
        >
            {`🔦`}
        </button>
    </div>
);

export default Nav;
