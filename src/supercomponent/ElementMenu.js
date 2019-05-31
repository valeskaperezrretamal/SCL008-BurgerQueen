import React, {Component} from 'react';
class ElementMenu extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
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