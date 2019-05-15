import React, {Component} from 'react';


class Menu extends Component {
    
    render(){
        return( 
            <div> 
            <button onClick={this.changeMenu}>Desayuno</button>
            <button onClick={this.changeMenu}>Resto del día</button>
            </div>
        )
    }
    changeMenu(){
        this.setState()
    }
}

export default Menu;









