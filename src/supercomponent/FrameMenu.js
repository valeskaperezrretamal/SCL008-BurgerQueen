import React, {Component} from 'react';
import './style/StyleOrder.css';

class Order extends Component{
    constructor(props){
        super(props);
//esto es una prueba, se va a implementar lectura desde redux
        this.state={clientName: "vale", order:
    [{productName: "Café",
    qty: 3,
    subtotal: 3000},{
        productName: "sandwich de jamón y queso",
        qty: 2,
        subtotal: 2000   
    }]};

    }
    render(){
        return(
            <div className="order">
                <p>Pedido de {this.state.clientName}</p>
                {this.state.order.map((e)=>{
                    return e.productName + e.qty + e.subtotal

                })}
            </div>
        )
    }
}
export default Order;