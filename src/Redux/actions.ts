import { IUser, IAlbum } from "../services/Types";
import * as actionTypes from './actionTypes'
import { FetchUsersSuccess, FetchAlbumsSuccess } from "./actionTypes";

 export const fetchUsersSuccess = (data: IUser[]): FetchUsersSuccess => {
     return{
         type: (actionTypes.FETCH_USERS_SUCCESS),
         payload:{
             users: data
         }
     }
 }

 export const fetchAlbumsSuccess = (data:IAlbum[]): FetchAlbumsSuccess => {
     return{
         type:(actionTypes.FETCH_ALBUMS_SUCCESS),
         payload:{
             albums: data
         }
     }
 }