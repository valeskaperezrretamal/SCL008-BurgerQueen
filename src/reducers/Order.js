//acá va la función que le da un nuevo estado a los componentes
import { ADD_TO_ORDER, REMOVE_OF_ORDER, ADD_NAME } from "../actions/actionTypes";

export default (
state={  //pasado
    actualOrder: {clientName: "", listOrder: []},
    kitchenlist: [],
    historial: []

},
action //presente
) => {
    switch(action.type){
        case ADD_TO_ORDER:
            return{ //futuro
                ...state,
                actualOrder:{
                    listOrder: state.actualOrder.listOrder.concat([action.payload])
                }
            }
            case REMOVE_OF_ORDER:
                return{
                    ...state,
                    actualOrder: state.actualOrder.listOrder.filter((e)=>{return([action.payload]!==e)})
            }
            case ADD_NAME:
                const copy=Object.assign({},state)
                copy.actualOrder.clientName=[action.payload]
            return copy;
                
            default: return state;


    }

}

//...copiar estado anterior y la , es para sobreescribir las cosas que yo quiero modificar
//siemore es bueno copiar el estado anterior
//default: return statement;   //para poder retornar estado anterior, en caso de acualquir cosa y no se cae
//el reduce se pone el resuktado de las acciones


//lenguaje rasp y lista:lenguajes funcionales
