import './styles/App.css';
import { useState } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const cards = [
    { id: uniqid(), name: 'まる子', img: require('./img/maruko.png') },
    { id: uniqid(), name: 'お姉ちゃん', img: require('./img/oneechan.png') },
    { id: uniqid(), name: 'お父さん',  img: require('./img/otoosan.png') },
    { id: uniqid(), name: 'お母さん', img: require('./img/okaasan.png') },
    { id: uniqid(), name: 'おじいちゃん', img: require('./img/ojiichan.png') },
    { id: uniqid(), name: 'おばあちゃん', img: require('./img/obaachan.png') },
    { id: uniqid(), name: 'たまちゃん', img: require('./img/tamachan.png') },
    { id: uniqid(), name: '花輪クン', img: require('./img/hanawakun.png') },
    { id: uniqid(), name: '丸尾君', img: require('./img/maruokun.png') },
    { id: uniqid(), name: '野口さん', img: require('./img/noguchisan.png') },
    { id: uniqid(), name: 'ブー太郎', img: require('./img/bootaro.png') },
    { id: uniqid(), name: '永沢', img: require('./img/nagasawa.png') },
  ];

  return (
    <>
      <Header score={score} best={best}/>
      <main>
        <div className='CardGrid'>
          {cards.map((card) => <Card name={card.name} img={card.img}/>)}
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default App;
