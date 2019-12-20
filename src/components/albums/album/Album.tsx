import React from 'react'
import './album.styles.css'

interface IAlbumCard {
    title: string
}

const Album: React.FC<IAlbumCard> = ({title}) => {
    return (
        <div className="card">
            <div>{title}</div>
        </div>
    )
}

export default Album
