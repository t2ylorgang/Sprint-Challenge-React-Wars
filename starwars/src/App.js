import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import { CardDeck } from 'reactstrap';

const App = () => {
  const [data, setData] = useState({ characters: [] });

  useEffect(() => {
    (async () => {
      try {
        const {data: {results}} = await axios('https://swapi.py4e.com/api/people/?page=1')
        console.dir(results, {depth: null});
        setData({characters: results});
      } catch(err) {
        console.error(`Unable to fetch data from swapi: ${err}`);
      }
    })();
  }, []);

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