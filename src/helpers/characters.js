import uniqid from 'uniqid';

const characters = [
  { id: uniqid(), name: 'まる子', img: require('../img/maruko.png') },
  { id: uniqid(), name: 'お姉ちゃん', img: require('../img/oneechan.png') },
  { id: uniqid(), name: 'お父さん',  img: require('../img/otoosan.png') },
  { id: uniqid(), name: 'お母さん', img: require('../img/okaasan.png') },
  { id: uniqid(), name: 'おじいちゃん', img: require('../img/ojiichan.png') },
  { id: uniqid(), name: 'おばあちゃん', img: require('../img/obaachan.png') },
  { id: uniqid(), name: 'たまちゃん', img: require('../img/tamachan.png') },
  { id: uniqid(), name: '花輪クン', img: require('../img/hanawakun.png') },
  { id: uniqid(), name: '丸尾君', img: require('../img/maruokun.png') },
  { id: uniqid(), name: '野口さん', img: require('../img/noguchisan.png') },
  { id: uniqid(), name: 'ブー太郎', img: require('../img/bootaro.png') },
  { id: uniqid(), name: '永沢', img: require('../img/nagasawa.png') },
  { id: uniqid(), name: '藤木', img: require('../img/fujiki.png') },
  { id: uniqid(), name: '山田', img: require('../img/yamada.png') },
  { id: uniqid(), name: '城ヶ崎さん',  img: require('../img/jougasaki.png') },
  { id: uniqid(), name: '笹山さん', img: require('../img/sasayamasan.png') },
  { id: uniqid(), name: 'みぎわさん', img: require('../img/migiwasan.png') },
  { id: uniqid(), name: '大野君', img: require('../img/onokun.png') },
  { id: uniqid(), name: '杉山君', img: require('../img/sugiyamakun.png') },
  { id: uniqid(), name: '冬田さん', img: require('../img/fuyutasan.png') },
  { id: uniqid(), name: '関口', img: require('../img/sekiguchi.png') },
  { id: uniqid(), name: 'はまじ', img: require('../img/hamaji.png') },
];

const randomCharacters = () => {
  const shuffledCharacters = characters.sort(() => 0.5 - Math.random());
  return shuffledCharacters.slice(0, 12);
};

export default randomCharacters;
