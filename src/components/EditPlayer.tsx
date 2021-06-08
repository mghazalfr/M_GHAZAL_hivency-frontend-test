import { FC, useRef, useEffect } from 'react'

type EditPlayerProps = {
    name: string;
    thumb: string;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEditSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}


const EditPlayer: FC<EditPlayerProps> = ({ name, thumb, handleNameChange, handleImageChange, handleEditSubmit}) => {

    const elementRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const  buttonElement = elementRef.current
    }, []);

    return (
        <div className="player-edit">
                <form>
                    <input id="editPlayerName" type="text" placeholder={name} onChange={handleNameChange} />
                    <input id="editPlayerThumb" type="url" placeholder={thumb} onChange={handleImageChange}/>
                    <button ref={elementRef} type="submit" onClick={handleEditSubmit}>Edit Player</button>
                </form>
            </div>
    )
}

export default EditPlayer