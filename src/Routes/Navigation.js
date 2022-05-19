import React from 'react'
import {NavLink} from 'react-router-dom';
import {navPath} from './path';

function Navigation() {
    return (
        <nav id="menu" className="menu">
          <ul>
            {
                navPath.map( (nav, index) => (
                    <li
                        key={index}
                    >
                        <NavLink 
                            key={index}
                            to={nav.to}
                        >
                            {nav.name}
                        </NavLink>
                    </li>
                ) )
            }
          </ul>
        </nav>
    )
}

export default Navigation
