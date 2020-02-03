import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, image }) => (
  <section>
    <article>
      <p>&quot;{quote}&quot;</p>
    </article>
    <figure>
      <img src={image} alt={character} />
      <figcaption>{character}</figcaption>
    </figure>
  </section>
);

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
