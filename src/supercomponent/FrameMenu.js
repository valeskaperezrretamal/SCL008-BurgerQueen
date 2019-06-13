import React, {Component} from 'react';
import {connect} from 'react-redux';

//import './style/StyleOrder.css';
//import {lo que use de boostrap} from 'react-bootstrap';

class FrameMenu extends Component{
    constructor(props){
        super(props);
//esto es una prueba, se va a implementar lectura desde redux
/*         this.state={clientName: "vale", order:
    [{productName: "Café",
    qty: 3,
    subtotal: 3000},{
        productName: "sandwich de jamón y queso",
        qty: 2,
        subtotal: 2000   
    }]};
 */
    
    }
    render(){
        return(
            <div className="order">
                <p>Pedido de {JSON.stringify(this.props.Order.actualOrder)}</p>
             {/*  {this.props.listOrder.map((e)=>{
                    return e.productName

                })}  */}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      ...state
    };
  };
  
 
  export default connect(
    mapStateToProps
    
  )(FrameMenu);