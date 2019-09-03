import React from 'react';
import less from 'less';
import logo from './logo.svg';
import './App.css';

function App() {

  function handleChange() {
    console.log(66666);
    less.modifyVars({
      '@primary-color': 'red'
   });
  }
  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={handleChange}>
        Click me
      </button>
      </header>
    </div>
  );
}

export default App;
