import logo from './logo.svg';
import './App.css';
import Notes from './Notes.js';
import { useState } from 'react';

function App() {
 


  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className='navbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </div>
        </nav>
      <Notes />
      </header>
      
      
    </div>
  );
}

export default App;
