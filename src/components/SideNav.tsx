import React from 'react'

//Import Dependencies
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const SideNav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"><FontAwesomeIcon icon={faUsers} className="icon" /></NavLink></li>
            </ul>
        </nav>
    )
}

export default SideNav