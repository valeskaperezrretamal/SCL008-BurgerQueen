//import React, { useState } from 'react';
import './App.css';
//import MenuButton from './MenuButton.js';
import NavigationMenu from './supercomponent/NavigationMenu';
import ClientName from './supercomponent/ClientName';
import OptionMenuWaiter from './supercomponent/OptionMenuWaiter';
import FrameMenu from './supercomponent/FrameMenu';



//import OptionMenu from './OptionMenu.js';
class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const [mode, changeMode] = useState('');


    let pantalla;
    if (mode === "mesero") {
      pantalla = <div><ClientName />
        <OptionMenuWaiter />;
              <FrameMenu></FrameMenu></div>
    }


    return (



      <div className="App">
        <header className="App-header">

          <h1 className="titulo">{"Burger Queen"} </h1>
          <NavigationMenu act={changeMode} />
          {pantalla}

        </header>

      </div>




    )
  }
}





export default App;
