import React from 'react';
import './App.css';
import Brady from '../images/sex.jpg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Brady} className="App-logo" alt="logo" />
          <h1 className="App-title">Time for Sex</h1>
        </header>
      </div>
    );
  }
}

export default App;
