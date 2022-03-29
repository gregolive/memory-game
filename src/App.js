import './styles/App.css';
import React, { useState, useEffect } from 'react';
import randomCharacters from './helpers/characters';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);

  const resetGame = () => {
    setGuessed([]);
    setScore(0);
  }

  const handleClick = (character) => {
    if (guessed.includes(character)) {
      resetGame();
      return;
    }
    setGuessed(guessed.concat(character));
    setScore(score + 1);
    if (score >= best) { setBest(best + 1); }
  };

  // Get best score from localStorage on component mount
  useEffect(() => {
    const storedBest = parseFloat(localStorage.getItem('Best'));
    if (storedBest) { setBest(storedBest); }
  }, []);

  // Save best score in localStorage whenever 'best' updates
  useEffect(() => {
    localStorage.setItem('Best', best);
  }, [best]);

  // Check if player has clicked all 22 cards
  useEffect(() => {
    if (score === 22) {
      resetGame();
      alert('あなたの勝ち！');
    }
  }, [score]);

  return (
    <>
      <Header score={score} best={best}/>
      <main>
        <div className='CardGrid'>
          {randomCharacters().map((character) => <Card key={character.id} character={character} handleClick={handleClick}/>)}
        </div>
        <Footer/>
      </main>
      <Instructions/>
    </>
  );
};

export default App;
