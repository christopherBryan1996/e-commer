import { GET_GAMERS } from "../actions/constants";

let initialState={
    gamers:[],
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case GET_GAMERS:
            return {
                ...state,
                gamers:[...action.payload]
            }
        default:
            return {...state}
    }
}