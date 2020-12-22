import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ joke, setJoke ] = useState({})
  const [ delayedPunchline, setDelayedPunchline ] = useState("")

  useEffect(() => {
    async function fetchJoke() {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      console.log("Random joke", response.data)
      setJoke(response.data)
    }
    fetchJoke()
  }, [])

  const punchline = joke.punchline
 
  function timesUp(){
    setDelayedPunchline(punchline)
  }
  
  setTimeout(timesUp, 5000)
  console.log("Delayed punchline?", delayedPunchline)
  


  return (
    <div className="App">
    <h1>Hilarious Jokes Generator</h1>
    <h4>{joke.setup}</h4>
    <h5>{delayedPunchline ? delayedPunchline : null}</h5>
    </div>
  );
}

export default App;
