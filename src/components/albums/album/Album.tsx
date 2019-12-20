import React from 'react'
import './album.styles.css'
import { useHistory } from 'react-router-dom'

interface IAlbumCard {
    title: string,
    id:number
}

const Album: React.FC<IAlbumCard> = ({title, id}) => {
    const history = useHistory()

    const handleAlbumClicked = () => {
        history.push(`/album:${id}`)
    }


    return (
        <div className="card" onClick={handleAlbumClicked}>
            <div>{title}</div>
        </div>
    )
}

export default Album
