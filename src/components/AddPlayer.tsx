// component that allows to add a new player to the list

import React from 'react';

//import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

interface AddPlayerProps {
    setPlayers: SetPlayers;
    setNewPlayer: SetNewPlayer;
    newPlayer: Players;
    players: Players[];
    selectedTeam: Teams[] | undefined;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ setPlayers, setNewPlayer, newPlayer, players, selectedTeam}) => {

    //HANDLER functions
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let teamId = (document.getElementById('teamId') as HTMLInputElement).value;
        let teamName = (document.getElementById('teamName') as HTMLInputElement).value;
        let teamBadge = (document.getElementById('teamBadge') as HTMLInputElement).value;
        let playerId = (document.getElementById('playerId') as HTMLInputElement).value;
        let playerName = (document.getElementById('playerName') as HTMLInputElement).value;
        let playerThumb = (document.getElementById('playerThumb') as HTMLInputElement).value;

        let newPlayerObject = {
            strPlayer: playerName,
            strThumb: playerThumb,
            idTeam: teamId,
            strTeam: teamName,
            strTeamBadge: teamBadge,
            idPlayer: playerId
        }
        setNewPlayer(newPlayerObject);
    }


    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let newPlayerObject = {
            strPlayer: "",
            strThumb: "",
            idTeam: "",
            strTeam: "",
            strTeamBadge: "",
            idPlayer: ""
        }

        setPlayers([...players, newPlayer])
        setNewPlayer(newPlayerObject)
    }

    return (
        <div className="team-page__player-addition">
            <form>
                <input id="teamId" type="hidden" value={selectedTeam ? selectedTeam[0].idTeam : ""} />
                <input id="teamName" type="hidden" value={selectedTeam ? selectedTeam[0].strTeam: ""} />
                <input id="teamBadge" type="hidden" value={selectedTeam ? selectedTeam[0].strTeamBadge : ""}/>
                <input id="playerId" type="text" value={newPlayer?.idPlayer} placeholder="Player Id" onChange={handleChange}/>
                <input id="playerName" type="text" value={newPlayer?.strPlayer} placeholder="Player Name" onChange={handleChange}/>
                <input id="playerThumb" type="url" value={newPlayer?.strThumb} placeholder="https://thumbnail-link.jpg" pattern="https://*" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Add Player</button>
            </form>
        </div>
    )
}

export default AddPlayer