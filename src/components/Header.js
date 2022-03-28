import '../styles/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header>
      <div className='HeaderTitle'>
        <img src={logo} alt='maruko-chan' className='Logo'/>
        <h1>記憶ゲーム</h1>
      </div>

      <div className='Scores'>
        <strong className='ScoreCard'>
          スコア
          <span>0</span>
        </strong>

        <strong className='ScoreCard'>
          ベスト
          <span>0</span>
        </strong>
      </div>
    </header>
  );
}

export default Header;
