import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const greet = () => {
    const heading = document.getElementById("mkheading");
    const para = document.createElement("p");
    para.innerText = "Hi! and Namaste! from Mannkumar K. Pandya"
    heading.append(para);
  }
  const [inputVariable, setinputVariable] = useState("");
  
  const inputUpdate = (e) => {
    setinputVariable(e.target.value);
  }


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
      <div className='main'>
          <h1 id='mkheading'>React-Todo-List</h1>
          <input type='text' id='inp' onChange={inputUpdate}></input>
          <button onClick={greet}>Submit</button>
          <p>{inputVariable}</p>
      </div>
        
      </header>
      
      
    </div>
  );
}

export default App;
