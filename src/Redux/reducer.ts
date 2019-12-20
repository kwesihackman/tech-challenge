import { AppState } from "../services/Types";
import {AppTypes } from './actionTypes'
import * as actionTypes from './actionTypes'

const initialState:AppState = {
    users:[]
}


 const rootReducer = (state = initialState, action: AppTypes) => {
    switch (action.type) {
        case (actionTypes.FETCH_USERS_SUCCESS):
            return {
                ...state,
                users: action.payload.users
            }
            
        case (actionTypes.UPDATE_USER_SUCCESS):
            {
                const updatedUsers = state.users.map(user => {
                    if (user.id === action.payload.user.id){
                        return action.payload.user
                    }
                    return user
                })

                return{
                    ...state,
                    users: updatedUsers
                }
            
            return {
                ...state,

            }}
        default:
            return state;
    }

}

export default rootReducer