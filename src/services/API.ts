import axios from 'axios'
const baseURL = "https://jsonplaceholder.typicode.com/"
const usersURL = `${baseURL}users`
const albumsURL = `${baseURL}albums`

export const fetchAllUsers = () => {
    return axios.get(usersURL)
}


export const fetchUserAlbums = (id:number) => {
    return  axios.get(`${albumsURL}?userId=${id}`)
}

export const getAlbumsPhotos = (albumId:number) => {
    return axios.get(`${baseURL}photos?albumId=${albumId}`)
}