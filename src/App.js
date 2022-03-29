import './styles/App.css';
import React, { useState, useEffect } from 'react';
import randomCharacters from './helpers/characters';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);

  const handleClick = (character) => {
    if (guessed.includes(character)) {
      setGuessed([]);
      setScore(0);
      return;
    }
    setGuessed(guessed.concat(character));
    setScore(score + 1);
    if (score >= best) { setBest(best + 1); }
  };

  return (
    <>
      <Header score={score} best={best}/>
      <main>
        <div className='CardGrid'>
          {randomCharacters().map((character) => <Card key={character.id} character={character} handleClick={handleClick}/>)}
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default App;
