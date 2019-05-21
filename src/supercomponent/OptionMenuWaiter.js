import React,{Component} from'react';
import data from '../OptionMenu.json';

class OptionMenuWaiter extends Component {
  constructor(props){
    super(props);
    
    this.state={category: "extra"};
   
  }
 
  render(){
    return(
      <div>
        <button onClick={()=>{this.setState({category: "desayuno"})}}> Desayuno</button>
        <button onClick={()=>{this.setState({category: "restodeldia"})}}> Resto del día</button>
        <button onClick={()=>{this.setState({category: "tiposdecarne"})}}> Tipos de carne</button>
        <button onClick={()=>{this.setState({category: "extra"})}}> extras</button>

     
    {this.state.category==="desayuno" ? data.desayuno.map(optmenu=>{return <p>{optmenu.option}</p>}):""}
    {this.state.category==="restodeldia" ? data.restodeldia.map(optmenu=>{return <p>{optmenu.option}</p>}):""}
    {this.state.category==="tiposdecarne" ? data.tiposdecarne.map(optmenu=>{return <p>{optmenu.option}</p>}):""}
    {this.state.category==="extra" ? data.extra.map(optmenu=>{return <p>{optmenu.option}</p>}):""}
    
    

      </div>
    )
  }

 
}
  

export default OptionMenuWaiter;


