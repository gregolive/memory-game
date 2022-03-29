import '../styles/Instructions.css';
import React, { useState } from 'react';

const Instructions = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => setActive(!active);

  const modal = (
    <div className='Modal'>
      <div className="Instructions">
        <h3>ちびまる子ちゃん 記憶ゲーム</h3>
        <p>画像をクリックしてポイントを獲得して、写真を2回クリックしたらゲームオーバー!</p>
        <button type='button' className='Button Start' onClick={handleClick}>スタート</button>
      </div>
    </div>
  );
  
  return ((active) ? modal : null);
};

export default Instructions;
