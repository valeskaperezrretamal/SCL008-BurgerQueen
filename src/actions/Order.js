import {ADD_TO_ORDER, REMOVE_OF_ORDER, ADD_NAME} from './actionTypes';


export const addToOrder = dispatch => item =>{
    dispatch({
        type: ADD_TO_ORDER,
        payload: item
    })

}
 export const removeOfOrder = dispatch => item =>{
     dispatch({
         type: REMOVE_OF_ORDER,
         payload: item
     })
 }

 export const addName = dispatch => item =>{
    dispatch({
        type: ADD_NAME,
        payload: item
    })
}
