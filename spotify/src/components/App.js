import React from 'react';
import './App.css';
import Brady from '../images/sex.jpg';
import Dropdown from './Dropdown';

class App extends React.Component {
  render() {
    return (
      <div>
      <Dropdown />
      <div className="App">
        <header className="App-header">
          <img src={Brady} className="App-logo" alt="logo" />
          <h1 className="App-title">Time for Sex</h1>
        </header>
      </div>
      </div>
    );
  }
}

export default App;
