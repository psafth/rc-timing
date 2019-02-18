import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Statusbar from './components/Statusbar';

class App extends Component {
  render() {
    return (<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Electron App using TypeScript
          </h1>
          
        </header>
        <Statusbar />
      </div>
      );
      
        
    
  }
}

export default App;
