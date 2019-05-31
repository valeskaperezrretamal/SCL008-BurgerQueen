import React from 'react'; 
import './App.css';
//import MenuButton from './MenuButton.js';
import NavigationMenu from './supercomponent/NavigationMenu';
import ClientName from './supercomponent/ClientName';
import OptionMenuWaiter from './supercomponent/OptionMenuWaiter';
import FrameMenu from './supercomponent/FrameMenu';



//import OptionMenu from './OptionMenu.js';

//condiciones iniciales
//variable y función van a determinar la pantalla acutal de la aplicación (opción menú/mesero,pedidos/cocina,historial)
let mode ="";
const changeMode = (view)=>{
  mode = view;
}

function App() {
  
  return (



    <div className="App">
      <header className="App-header">
       
      <h1 className="titulo">{"Burger Queen" + mode} </h1>
      <NavigationMenu action = {changeMode}/>
      
      {/* <ClientName/>
      <OptionMenuWaiter/>
      <FrameMenu></FrameMenu> */}
      
        
        
         
        
         
       
    </header>
      
    </div>
  );
}





export default App;
