import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import * as API from '../../../services/API'
import { IPhoto } from '../../../services/Types'
import NoData from '../../NoData'
import './albumdetails.styles.css'

interface Props {
    
}

const AlbumDetails: React.FC<Props> = () => {
    const history = useHistory()
    const [albumPhotos, setAlbumPhotos] = useState<IPhoto[]>([])
    const {id} = useParams()

    const fetchAlbumPhotos = () => {
        const albumId = `${id}`.substr(1) as unknown
        API.getAlbumsPhotos(albumId as number)
            .then(response => setAlbumPhotos(response.data))
            .catch()
    }

    useEffect(() => {
        fetchAlbumPhotos()

    }, [])


    return (
        <div className="container">
             <h1 className="text-white text-center py-4">Selected Album Photos</h1>
            <div className="row">
                {albumPhotos.length === 0 ? <NoData title="No photos found for this album"/> : (albumPhotos.map((photo, index) => (
                    <div className="thumbnail-card shadow-lg" key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )))}
            </div>
        </div>
    )
}

export default AlbumDetails
