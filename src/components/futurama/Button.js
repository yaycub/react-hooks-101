import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ setCharacter, character, image }) => (
  <button onClick={() => setCharacter(character)}><img src={image} style={{ height:'10vh' }} /></button>
);

Button.propTypes = {
  setCharacter: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Button;
