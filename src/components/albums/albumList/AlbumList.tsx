import React from 'react'
import Album from '../album/Album'
import './albumlist.styles.css'
import { IAlbum } from '../../../services/Types'
import NoData from '../../NoData'


interface IAlbumList{
    albums:IAlbum[]
}

const AlbumList: React.FC<IAlbumList> = ({albums}) => {
    return (
        <div className="mt-5">
        {albums.length === 0 ? <NoData title="No Albums found"/> : albums.map(album => <Album title={album.title} id={album.id} key={album.id}/> ) }
        </div>
    )
}

export default AlbumList
