// component that displays the player

import React, {useEffect, useState} from 'react';

//impot dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

interface PlayerCardProps {
    playerId: string;
    name : string;
    thumb: string;
    playersData: Players[];
    setPlayers: SetPlayers;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ playerId, name, thumb, playersData, setPlayers}) => {

    //State that holds the player name
    const [ playerName, setPlayerName ] = useState("");
    //State that holds the player image
    const [ playerImage, setPlayerImage ] = useState("");
    //State that folows the plager change
    const [ change, setChange ] = useState(false);

    //USE EFFECTS
    useEffect(() => {
        setPlayerName(playerName);
        setPlayerImage(playerImage);
    }, [change])

    //HANDLER Functions

    //function that deletes the player from the list
    const deletePlayer = (playerId:string) => {
        let arrayDeleted:Players[] = playersData.filter( function(deleted) {
            return deleted.idPlayer !== playerId;
        })
        if(arrayDeleted) {
            setPlayers(arrayDeleted)
        }
    }

    //fucntions that edit the players info------//
    //Shows the edit form
    const editPlayerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.target.addEventListener('click', () => {
            const target = e.target as Element;
            const parent = target.parentElement as HTMLElement;
            const grandparent = parent.parentElement as HTMLElement;
            const editform = (grandparent.querySelector('.player-edit') as HTMLElement);
            editform.style.display="flex";
        })
    }

    //sets the player's new name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newPlayerName = e.target.value;
        setPlayerName(newPlayerName);
    }

    // sets the player's new image
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newPlayerImage = e.target.value;
        setPlayerImage(newPlayerImage);
    }

    //handles the form submit and hides it
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setChange(true);
        const target = e.target as Element;
        const parent = target.parentElement as HTMLElement;
        const grandparent = parent.parentElement as HTMLElement;
        grandparent.style.display="none";
    }







    return (
        <li className="team-page__player-list-item">
            <div className="player-thumb">
                {thumb
                ? <img src={playerImage != "" ? playerImage : thumb} alt={name} />
                : ""}
            </div>
            <h2>{playerName != "" ? playerName : name}</h2>
            <div className="buttons-container">
                <button onClick={() => deletePlayer(playerId)} className="general-button"><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>
                <button onClick={editPlayerHandler} className="general-button"><FontAwesomeIcon className="icon" icon={faUserEdit} /></button>
            </div>
            <div className="player-edit">
                <form>
                    <input id="editPlayerName" type="text" placeholder={name} onChange={handleNameChange} />
                    <input id="editPlayerThumb" type="url" placeholder={thumb} onChange={handleImageChange}/>
                    <button type="submit" onClick={handleSubmit}>Edit Player</button>
                </form>
            </div>
        </li>
    )
}

export default PlayerCard