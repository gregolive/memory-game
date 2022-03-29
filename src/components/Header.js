import '../styles/Header.css';
import logo from '../img/logo.png';

const Header = (props) => {
  return (
    <header>
      <div className='HeaderTitle'>
        <img src={logo} alt='maruko-chan' className='Logo'/>
        <h1>記憶ゲーム</h1>
      </div>

      <div className='Scores'>
        <strong className='ScoreCard'>
          スコア
          <span>{props.score}</span>
        </strong>

        <strong className='ScoreCard'>
          ベスト
          <span>{props.best}</span>
        </strong>
      </div>
    </header>
  );
};

export default Header;
