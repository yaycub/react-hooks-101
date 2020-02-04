import { useState, useEffect } from 'react';
import { getQuote } from '../services/getQuote';

export const useQuotes = () => {
  const [character, setCharacter] = useState('fry');
  const [count, setCount] = useState(1);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getQuote(character, count)
      .then(console.log);
  }, [character, count]);

  return { response, character, count, setCharacter, setCount };
};
