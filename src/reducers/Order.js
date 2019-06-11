import { ADD_ORDER } from "../actions/actionTypes";

export default (
state={  //pasado
    name: "",
    items: []
},
action //presente
) => {
    switch(action.type){
        case ADD_ORDER:
            return{ //futuro
                ...state,
                items: state.items.concat([action.payload])

            }


    }

}

//...copiar estado anterior y la , es para sobreescribir las cosas que yo quiero modificar
//siemore es bueno copiar el estado anterior
//default: return statement;   //para poder retornar estado anterior, en caso de acualquir cosa y no se cae
//el reduce se pone el resuktado de las acciones


//lenguaje rasp y lista:lenguajes funcionales
