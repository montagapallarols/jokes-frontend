import React, { useState, useEffect } from "react";
import "./Joke.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import Spinner from 'react-bootstrap/Spinner'
import {FacebookShareButton, FacebookIcon} from "react-share";

export default function Joke(props) {
  const [ joke, setJoke ] = useState(null)
  const [ delayedPunchline, setDelayedPunchline ] = useState(null)
  const [ newJoke, setNewJoke ] = useState(false)

  useEffect(() => {
    async function fetchJoke() {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      console.log("Random joke", response.data)
      setJoke(response.data)
    }
    fetchJoke()
  }, [newJoke])

 
  function timesUp(){
    setDelayedPunchline(joke?.punchline)
  }
  
  setTimeout(timesUp, 4000)
  console.log("Delayed punchline?", delayedPunchline)
  
  function showNewJoke() {
    setDelayedPunchline(null)
    setJoke(null)
    setNewJoke(!newJoke)
  }

  if (!joke) {
    return <Spinner animation="border" />
  }


return (
    <div>
        <h4 className="setup">{joke.setup}</h4>
        {delayedPunchline === null ? <Loading/> : <h5 className="punchline">{delayedPunchline}</h5>}
        <Button className="button" onClick={showNewJoke} variant="info">Tell me another</Button>
        <FacebookShareButton 
                url={"http://www.camperstribe.com"}
                quote={`${joke.setup} ${joke.punchline}`}
                hashtag="#joke">
                 <FacebookIcon size={36} />
              </FacebookShareButton>
    </div>
)
}
