import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Statusbar from './components/Mylaps/Statusbar';

class App extends Component {
  render() {
    return (<div className="App page">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Electron App using TypeScript
          </h1>
          
        </header>
      </div>
      );
      
        
    
  }
}

export default App;
