import React, { useState, useEffect } from 'react';
import { getQuote } from '../services/getQuote';
import Quote from '../components/futurama/Quote';
import Button from '../components/futurama/Button';

const FuturamaFn = () => {
  const [displayQuote, setDisplayQuote] = useState({
    character: '',
    quote: '',
    image: ''
  });
  
  useEffect(() => {
    getQuote()
      .then(quote => setDisplayQuote(quote));
  }, []);

  const handleClick = () => {
    getQuote()
      .then(quote => setDisplayQuote(quote));
  };

  return (
    <>
      <Quote {...displayQuote} />
      <Button onClick={handleClick} />
    </>
  );
};

export default FuturamaFn;
