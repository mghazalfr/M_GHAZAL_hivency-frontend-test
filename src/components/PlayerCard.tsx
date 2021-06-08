// component that displays the player

import React, {useEffect, useState, useRef} from 'react';

//Import Components
import EditPlayer from './EditPlayer';

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

    //Reference
    const editRef = useRef<HTMLLIElement>(null);

    //USE EFFECTS
    useEffect(() => {
        setPlayerName(playerName);
        setPlayerImage(playerImage);

        //creating a reference for the edit elements
        const edit = editRef.current;
        const editForm = edit?.querySelector('.player-edit') as HTMLElement;
        const editButton = edit?.querySelector('#editButton') as HTMLButtonElement;
        editButton.addEventListener('click', () => {
            editForm.style.display="flex";
        })
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
    const handleEditSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setChange(true);
        const target = e.target as Element;
        const parent = target.parentElement as HTMLElement;
        const grandparent = parent.parentElement as HTMLElement;
        grandparent.style.display="none";
    }




    return (
        <li ref={editRef} className="team-page__player-list-item">
            <div className="player-thumb">
                {thumb
                ? <img src={playerImage != "" ? playerImage : thumb} alt={name} />
                : ""}
            </div>
            <h2>{playerName != "" ? playerName : name}</h2>
            <div className="buttons-container">
                <button onClick={() => deletePlayer(playerId)} className="general-button"><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>
                <button className="general-button" id="editButton"><FontAwesomeIcon className="icon" icon={faUserEdit} /></button>
            </div>
            <EditPlayer
                name = {name}
                thumb = {thumb}
                handleNameChange = {handleNameChange}
                handleImageChange = {handleImageChange}
                handleEditSubmit = {handleEditSubmit}
            ></EditPlayer>
        </li>
    )
}

export default PlayerCard