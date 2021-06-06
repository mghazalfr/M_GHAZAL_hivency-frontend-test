// Component that renders the information about a team

import React from 'react';

//import Components
import PlayerCard from './PlayerCard';
import AddPlayer from './AddPlayer';

interface TeamPageProps {
    teamsData: Teams[] | undefined;
    playersData: Players[];
    setPlayers: SetPlayers;
    setNewPlayer: SetNewPlayer;
    newPlayer: Players;
    isLoading: Boolean;
}

const TeamPage: React.FC<TeamPageProps> = ({ teamsData, playersData, setPlayers, setNewPlayer, isLoading, newPlayer}) => {

    // created a new array with only the selected team
    const selectedTeam = playersData ? teamsData?.filter( team => playersData[0].idTeam === team.idTeam ) : undefined;

    return (
        <section className="team-page">
            {!isLoading
            ? <><div className="team-page__description">
            {selectedTeam
            ? <>
                <h1>{selectedTeam[0].strTeam}</h1>
                <div className="teams-container__image">
                    <img src={selectedTeam[0].strTeamBadge} alt="team logo"/>
                </div>
                <p>{selectedTeam[0].strDescriptionEN}</p>
              </>
            : ""}
        </div>
        <div className="team-page__payers-container">
            <h1>Players</h1>
            <ul className="team-page__player-list">
                { playersData
                ? playersData.map( (player, index) => (
                    <PlayerCard
                        key = {index}
                        name = {player.strPlayer}
                        thumb = {player.strThumb}
                        playersData = {playersData}
                        setPlayers = {setPlayers}
                        playerId = {player.idPlayer}
                    />
                ))
                : <h1>No players to show</h1>}
            </ul>
            { playersData
            ? <AddPlayer
                setPlayers = {setPlayers}
                setNewPlayer = {setNewPlayer}
                newPlayer = {newPlayer}
                players = {playersData}
                selectedTeam = {selectedTeam}
            ></AddPlayer>
            : "" }
        </div></>
        : <p>loading...</p>}
        </section>
    )
}

export default TeamPage