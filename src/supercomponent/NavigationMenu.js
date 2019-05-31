import React, {Component} from 'react';
import './style/StyleNavigationMenu.css';



class NavigationMenu extends Component {
  constructor(props){
    super(props);
  }
   
    render(){
        return(
            <div className="navigationMenu">
              <button onClick ={()=>{return this.props.act("mesero")}} type="button" className="btnOption">Opción Menú/Mesero</button>
              <button onClick ={()=>{return this.props.act("cocina")}} type="button" className="btnKitchen">Pedido/Cocina</button>
              <button onClick ={()=>{return this.props.act("historico")}} type="button" className="btnRecord">Historial</button>
            </div>
        )
    }
}

export default NavigationMenu;

//import React, {component} from 'react';


//class NavigationMenu extends component{
    //constructor(){
      //  super();
        


    //}
    //render(){
      //  return(
        //    <div>
          //      <nav>
            //        <ul>
              //          <li> <a href="" >Mesero</a></li>
                //</ul>
                //</nav>
            //</div>
        //)
    //}
    

//}
//export default NavigationMenu;
