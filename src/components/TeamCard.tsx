// Component that will render the team card within the Teams list

import React from 'react';

//Import Dependencies
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface TeamCardProps {
    teamId: string;
    teamImg: string;
    teamName?: string;
    teamCity: string;
    teamPageHandler: TeamPageHandler;
}


const TeamCard: React.FC<TeamCardProps> = ({teamId, teamImg, teamName, teamCity, teamPageHandler}) => {
    return (
        <li className="teams-container__list-item">
            <div className="teams-container__image">
                <img src={teamImg} alt="team logo"/>
            </div>
            <div className="teams-container__info">
                {teamName ? <h2>{teamName}</h2> : <h2>{teamCity}</h2>}
                <NavLink className="general-button" to="/team" onClick={() => teamPageHandler(teamId)}><FontAwesomeIcon icon={faEye} className="icon" /></NavLink>
            </div>
        </li>
    )
}

export default TeamCard