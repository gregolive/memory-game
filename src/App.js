import './styles/App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
        <Card name='おじいちゃん' src={require('./img/ojiisan.png')}/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
