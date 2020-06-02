import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'; //import character component
import axios from 'axios'; //import axios
import { CardDeck } from 'reactstrap'; //allows us to display multiple cards, from reactstrap website

const App = () => {
  const [data, setData] = useState({ characters: [] });

  useEffect(() => { //filling in characters array with people
    (async () => {
      try { //skip for loop, get the whole page, get rid of data i dont need
        const {data: {results}} = await axios('https://swapi.py4e.com/api/people/?page=1'); //use destructure assignment to get data we want, and get rid of data we dont. results is what fills in characters array.
        console.dir(results, {depth: null}); //used to see ALL data
        setData({characters: results});
      } catch(err) {
        console.error(`Unable to fetch data from swapi: ${err}`);
      }
    })(); //doesnt get called over and over again, only called when mounted
  }, []); //doesnt get called over and over again, only called when mounted

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CardDeck className="d-flex justify-content-center align-items-center">
        {data.characters.map((character) => {
          return <Character info={character}></Character>
        })}
      </CardDeck>
    </div>
  );
}

export default App;