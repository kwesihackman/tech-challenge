import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import * as API from '../../../services/API'
import { IPhoto } from '../../../services/Types'
import NoData from '../../NoData'
import './albumdetails.styles.css'

interface Props {

}

const AlbumDetails: React.FC<Props> = () => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [selectedPhotoTitle, setSelectedPhotoTitle] = useState('')
    const [selectedPhoto, setselectedPhoto] = useState('')
    const [albumPhotos, setAlbumPhotos] = useState<IPhoto[]>([])
    const { id } = useParams()

    const fetchAlbumPhotos = () => {
        const albumId = `${id}`.substr(1) as unknown
        API.getAlbumsPhotos(albumId as number)
            .then(response => setAlbumPhotos(response.data))
            .catch()
    }

    const handleThumbnailClicked = (image: string, title: string) => {
        setSelectedPhotoTitle(title)
        setselectedPhoto(image)
        setShowModal(true)
    }

    useEffect(() => {
        fetchAlbumPhotos()

    }, [])


    return (
        <div className="container">
            <h1 className="text-white text-center py-4">Selected Album Photos</h1>
            <div className="row">
                {albumPhotos.length === 0 ? <NoData title="No photos found for this album" /> : (albumPhotos.map((photo, index) => (
                    <div className="thumbnail-card shadow-lg cursor-pointer" key={photo.id} onClick={() => handleThumbnailClicked(photo.url, photo.title)}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )))}
            </div>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{selectedPhotoTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedPhoto} alt={selectedPhotoTitle}/>
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default AlbumDetails
