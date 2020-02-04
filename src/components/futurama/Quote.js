import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quotes }) => {
  const quoteElements = quotes.map(quote => (
    <li key={quote}>
      <p>&quot{quote}&quot - {quote.character}</p>
    </li>
  ));

  return (
    <ul>
      {quoteElements}
    </ul>
  );
};

Quote.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Quote;
