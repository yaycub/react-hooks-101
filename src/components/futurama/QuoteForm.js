import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Button';

const QuoteForm = ({ onSubmit, setCharacter, setCount, character, image, count }) => {

  

  return (
    <form onSubmit={onSubmit}>
      <Radio character="fry"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
        setCharacter={setCharacter}/>
      <Radio character="leela"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png"
        setCharacter={setCharacter}/>
      <Radio character="bender"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/bender.png"
        setCharacter={setCharacter}/>
      <Radio character="professor-farnsworth"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/farnsworth.png"
        setCharacter={setCharacter}/>
      <Radio character="zapp-brannigan"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/Zapp_Brannigan.png"
        setCharacter={setCharacter}/>
      <Radio character="dr-zoidberg"
        image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png"
        setCharacter={setCharacter}/>
      <input type="number" value={count} name="count" min="1" max="10" onChange={({ target }) => setCount(target.value)} />
      <button>Get Quotes!</button>
    </form>
  );

};

QuoteForm.propTypes = {
  setCharacter: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default QuoteForm;
