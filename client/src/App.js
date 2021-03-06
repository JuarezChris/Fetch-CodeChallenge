import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
