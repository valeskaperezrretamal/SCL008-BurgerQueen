import React, {Component} from 'react';

class SuperButton extends Component {
    render(){
        const names = ["Desayuno","Resto del día","Enviar a cocina","Pedido listo"];
        return(
            <div>
                {names.map((name)=>
                    <button>{name}</button>
                    )}
            </div>
        );
    }

}
export default SuperButton;