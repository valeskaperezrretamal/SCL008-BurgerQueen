import React from 'react'; 
import './App.css';
//import MenuButton from './MenuButton.js';
import NavigationMenu from './supercomponent/NavigationMenu';
import ClientName from './supercomponent/ClientName';
import OptionMenuWaiter from './supercomponent/OptionMenuWaiter';
import FrameMenu from './supercomponent/FrameMenu';



//import OptionMenu from './OptionMenu.js';


function App() {
  return (



    <div className="App">
      <header className="App-header">
       
      <h1 className="titulo">Burger Queen</h1>
      <NavigationMenu/>
      <ClientName/>
      <OptionMenuWaiter/>
      <FrameMenu></FrameMenu>
      
        
        
         
        
         
       
    </header>
      
    </div>
  );
}





export default App;
