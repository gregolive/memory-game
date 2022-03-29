import './styles/App.css';
import { useState } from 'react';
import randomCharacters from './helpers/characters';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);

  return (
    <>
      <Header score={score} best={best}/>
      <main>
        <div className='CardGrid'>
          {randomCharacters().map((character) => <Card name={character.name} img={character.img}/>)}
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default App;
