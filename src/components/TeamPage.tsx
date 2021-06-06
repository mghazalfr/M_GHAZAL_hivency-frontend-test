// Component that renders the information about a team

import React from 'react';

interface TeamPageProps {
    teamsData: Teams[] | undefined;
    playersData: Players[];
    setPlayers: SetPlayers;
    setNewPlayer: SetNewPlayer;
    newPlayer: Players;
    isLoading: Boolean;
}

const TeamPage: React.FC<TeamPageProps> = ({ teamsData, playersData, setPlayers, setNewPlayer, isLoading, newPlayer}) => {
    return (
        <section className="team-page">

        </section>
    )
}

export default TeamPage