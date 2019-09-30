import React from 'react';
import { useBeforeunload } from 'react-beforeunload';

// import logo from './logo.svg';
import './App.css';

import Container from './components/Container/Container';

function App() {
  // Working
  useBeforeunload(() => 'You wont see me');

  return (
    <div className="App">
      <header className="App-header">
        <Container />
      </header>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
