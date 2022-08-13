import { GET_GAMERS } from "./constants";

export function get_gamers(){
    return (dispatch)=>{
        fetch('https://api.rawg.io/api/games?key=f7f4dae2c25745dbb37c6858d876b365').then((res)=>{
            res.json().then((res2)=>{
                dispatch({
                    type:GET_GAMERS,
                    payload:res2.results
                })
            })
        })
    }
}