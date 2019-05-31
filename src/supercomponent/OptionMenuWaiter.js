import React,{Component} from'react';
import data from '../OptionMenu.json';
import ElementMenu from './ElementMenu.js';

class OptionMenuWaiter extends Component {
  constructor(props){
    super(props);
    
    this.state={category: ""};
   
  }
 
  render(){
    return(
      <div>
        <button onClick={()=>{this.setState({category: "desayuno"})}}> Desayuno</button>
        <button onClick={()=>{this.setState({category: "restodeldia"})}}> Resto del día</button>
        <button onClick={()=>{this.setState({category: "tiposdecarne"})}}> Tipos de carne</button>
        <button onClick={()=>{this.setState({category: "extra"})}}> extras</button>

     
    {this.state.category==="desayuno" ? data.desayuno.map(optmenu=>{return <ElementMenu name={optmenu.option} price={optmenu.precio}/>}):""}
    {this.state.category==="restodeldia" ? data.restodeldia.map(optmenu=>{return <ElementMenu name={optmenu.option}price={optmenu.precio}/>}):""}
    {this.state.category==="tiposdecarne" ? data.tiposdecarne.map(optmenu=>{return <ElementMenu name={optmenu.option} price={optmenu.precio}/>}):""}
    {this.state.category==="extra" ? data.extra.map(optmenu=>{return <ElementMenu name={optmenu.option} price={optmenu.precio}/>}):""}
    
    

      </div>
    )
  }

 
}
  

export default OptionMenuWaiter;


