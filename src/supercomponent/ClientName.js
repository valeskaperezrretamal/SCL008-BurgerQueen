import React,{Component} from 'react';
import {connect}from 'react-redux';
import {addName} from '../actions/Order';


class ClientName extends Component {
    constructor(props) {
      super(props);   
      this.textBox = React.createRef();  
    }
  
    render() {
      return (
        <div className="clientName">
        <form>
          <label>
            Nombre Cliente:
            <input ref={this.textBox} type="text"  />
          </label>
          <input type="button" onClick={()=>{this.props.ADD_NAME(this.textBox.current.value)}}value="ingresar" />
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