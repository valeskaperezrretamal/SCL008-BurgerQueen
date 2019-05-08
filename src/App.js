import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import SubTitle from './SubTitle.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Title name= "laboratoria"></Title>
         <SubTitle name="proyecto"></SubTitle>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
