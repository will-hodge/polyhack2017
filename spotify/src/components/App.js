import React from 'react';
import './App.css';
import AppBar from './AppBar';

class App extends React.Component {
  render() {
    return (
      <div>
      <AppBar />
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
