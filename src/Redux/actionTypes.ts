import { IUser, IPhoto, IAlbum } from "../services/Types"

export const FETCH_USERS_START = "FETCH_USERS_START"
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"

export const FETCH_ALBUMS_START = "FETCH_ALBUMS_START"
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE"
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS"

export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START"
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE"
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS"

export const UPDATE_USER_START = "UPDATE_USER_START"
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"


export interface FetchUsersSuccess {
    type: typeof FETCH_USERS_SUCCESS,
    payload:{
        users: IUser[]
    }
}

export interface FetchUserStart{
    type: typeof FETCH_USERS_START,
    payload:{
        isLoading: boolean
    }
}

export interface FetchUserFailure{
    type: typeof FETCH_USERS_FAILURE,
    payload:{
        error: string
    }
}

export interface UpdateUserStart{
    type: typeof UPDATE_USER_START,
    payload:{
        isLoading: boolean
    }
}

export interface UpdateUserSuccess{
    type: typeof UPDATE_USER_SUCCESS,
    payload:{
        user:IUser
    }
}

export interface FetchAlbumPhotos{
    type: typeof FETCH_PHOTOS_SUCCESS,
    payload:{
        photos: IPhoto[]
    }
}

export interface FetchAlbumsSuccess{
    type: typeof FETCH_ALBUMS_SUCCESS,
    payload:{
        albums: IAlbum[]
    }
}

export type AppTypes = FetchUsersSuccess | FetchAlbumPhotos | FetchUserStart | FetchUserFailure | UpdateUserStart | UpdateUserSuccess | FetchAlbumsSuccess