import React, {Component} from 'react';
import './style/StyleElementMenu.css';
import {connect} from 'react-redux';
import {addToOrder,removeOfOrder} from '../actions/Order';



class ElementMenu extends Component{
    constructor(props){
        super(props);

    }
    render(){

        return(
            <div className="elementmenu">
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.price}</li>
                </ul>
                <button onClick={()=>{this.props.ADD({name: this.props.name, price: this.props.price})}} type="button" className="addone">+1</button>
                <button onClick={()=>{this.props.DELETE(this.props)}}type="button" className="lessone">-1</button>
                
            </div>




        )
    }
}
 const mapStateToProps = (state)=>{
    return {
      ...state
    };
  }; 

  const mapDispatchToProps = (dispatch) => {
    return {
      //turnToName: turnName(dispatch),
      ADD: addToOrder(dispatch),
      DELETE: removeOfOrder(dispatch) 
    }
  }
  export default connect(
     mapStateToProps, 
    mapDispatchToProps
  )(ElementMenu);