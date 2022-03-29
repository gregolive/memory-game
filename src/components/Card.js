import '../styles/Card.css';

const Card = (props) => {
  return (
    <button className='Card'>
      <img src={props.img} alt='' className='CardImg'/>
      <h2>{props.name}</h2>
    </button>
  );
};

export default Card;
