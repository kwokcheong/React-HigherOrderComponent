import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter.js';
import HoverCounter from './components/HoverCounter.js';
import displaycolor from './components/displaycolor';
import displayColor from './components/displaycolor';
function App() {
  //learning rest operator
  let message = "list of color"
  let colorArray = ['orange','red', 'yellow']
  displayColor(message, 'red', 'blue', 'green');

  //Spread operator
  displayColor(message, ...colorArray)
  return (
    <div className="App">
        <ClickCounter />
        <HoverCounter />
    </div>
  );
}

export default App;
