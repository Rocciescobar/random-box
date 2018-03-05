import React, { Component } from 'react';
import './App.css';

const randomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomNumber = () => {
  return Math.floor((Math.random() * 5) + 1) + 'rem';
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Random Box</h1>
        </header>
        <p className="App-intro">
          Actualiza la página para ver más estilos...
        </p>
        <div className="App-box" style={{borderColor: randomColor()}}>
          <p className="App-box-text" style={{fontSize: randomNumber()}}>
            Random
          </p>
        </div>
      </div>
    );
  }
}

export default App;