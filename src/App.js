import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './components/Joke';


function App() {
  return (
    <div className="App">
    <h1 className="app-title">Random Joke Generator</h1>
    <Joke/>
    </div>
  );
}

export default App;
