import { User, Album } from "../services/Types";
import * as actionTypes from './actionTypes'
import { FetchUsersSuccess, FetchAlbumsSuccess } from "./actionTypes";

 export const fetchUsersSuccess = (data: User[]): FetchUsersSuccess => {
     return{
         type: (actionTypes.FETCH_USERS_SUCCESS),
         payload:{
             users: data
         }
     }
 }

 export const fetchAlbumsSuccess = (data:Album[]): FetchAlbumsSuccess => {
     return{
         type:(actionTypes.FETCH_ALBUMS_SUCCESS),
         payload:{
             albums: data
         }
     }
 }