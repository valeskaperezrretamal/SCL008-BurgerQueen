import React, {Component} from 'react';
import './style/StyleElementMenu.css';
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
                <button type="button" className="addone">+1</button>
                <button type="button" className="lessone">-1</button>
                
            </div>




        )
    }
}
export default ElementMenu;