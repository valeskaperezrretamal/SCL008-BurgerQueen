import React,{Component} from 'react';
import {connect}from 'react-redux';
import {addName} from '../actions/Order';


class ClientName extends Component {
    constructor(props) {
      super(props);     
    }
  
    render() {
      return (
        <div className="clientName">
        <form onSubmit={this.props.addName}>
          <label>
            Nombre Cliente:
            <input type="text"  />
          </label>
          <input type="submit" value="ingresar" />
        </form>
        </div>
      );
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
      ADD_NAME: addName(dispatch)
     
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClientName);