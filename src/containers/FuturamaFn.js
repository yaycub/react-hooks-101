import React from 'react';
import Quote from '../components/futurama/Quote';
import Button from '../components/futurama/Button';
import { useQuotes } from '../hooks/quotes';

const FuturamaFn = () => {
  const { response, count, setCharacter, setCount } = useQuotes();

  return (
    <>
      <Quote quotes={response} />
      <section>
        <Button character="fry"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
          setCharacter={setCharacter} />
        <Button character="leela"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png"
          setCharacter={setCharacter} />
        <Button character="bender"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/bender.png"
          setCharacter={setCharacter} />
        <Button character="professor-farnsworth"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/farnsworth.png"
          setCharacter={setCharacter} />
        <Button character="zapp-brannigan"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/Zapp_Brannigan.png"
          setCharacter={setCharacter} />
        <Button character="zapp-brannigan"
          image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png"
          setCharacter={setCharacter} />
      </section>
    </>
  );
};

export default FuturamaFn;
