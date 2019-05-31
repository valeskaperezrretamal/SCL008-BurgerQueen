import React, {Component} from 'react';


class SuperButton extends Component {
    render(){
       
        return(
            <div>
                
                    <button type= "button" className="button" onClick={this.props.click}>{this.props.btn}</button>
                
            </div>
        );
    }

}
export default SuperButton;