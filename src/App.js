import React from 'react'; 
import './App.css';
//import MenuButton from './MenuButton.js';
import NavigationMenu from './supercomponent/NavigationMenu.js';
import SuperButton from './supercomponent/SuperButton.js';
import ClientName from './supercomponent/ClientName';
//import OptionMenu from './OptionMenu.js';


function App() {
  return (



    <div className="App">
      <header className="App-header">
      <h1>Burger Queen</h1>
      <NavigationMenu></NavigationMenu>
      <SuperButton btn="mesero"/>
      <SuperButton btn="pedido/cocina"/>
      <ClientName></ClientName>
        
        
         
        
         
       
      </header>
    </div>
  );
}





export default App;
