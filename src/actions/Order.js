import {ADD_ORDER} from './actionTypes';


export const addOrder = dispatch => item =>{
    dispatch({
        type: ADD_ORDER,
        payload: item
    })

}

