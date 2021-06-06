// Component that displays the list of teams

import React from 'react'

interface TeamsListProps {
    teamsData: Teams[] | undefined;
    teamPageHandler: TeamPageHandler;
}

const TeamsList: React.FC<TeamsListProps> = ({ teamsData, teamPageHandler }) => {
    return (
        <section className='teams-container'>
            <h1>All Teams</h1>
            <ul className='teams-container__list'>
                {/* {teamsData
                ? teamsData.map( (team, index) => (
                    <TeamCard
                        key = {index}
                        teamId = {team.idTeam}
                        teamName = {team.strAlternate}
                        teamCity = {team.strTeam}
                        teamImg = {team.strTeamBadge}
                        teamPageHandler = {teamPageHandler}
                    ></TeamCard>
                ))
                : ""} */}
            </ul>
        </section>
    )
}

export default TeamsList