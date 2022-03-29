import '../styles/Card.css';

const Card = (props) => {
  return (
    <button className='Card' onClick={() => props.handleClick(props.character.id)}>
      <img src={props.character.img} alt='' className='CardImg'/>
      <h2>{props.character.name}</h2>
    </button>
  );
};

export default Card;
