import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';
import dummyData from './dummy-data';
import endpoint from './endpoint';
import './styles.scss';

const Application = () => {
  const [characters, setCharacters] = useState(dummyData);

  useEffect(() => {
    console.log('Fetching');
    fetch(`${endpoint}/characters`)
      .then(response => response.json())
      .then(response => {
        console.log({ response });
        setCharacters(Object.values(response.characters));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          <CharacterList characters={characters} />
        </section>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  rootElement,
);
