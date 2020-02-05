import React from 'react';
import Quote from '../components/futurama/Quote';
import Button from '../components/futurama/Button';
import styles from './Futurama.css';
import { useQuotes } from '../hooks/quotes';

const FuturamaFn = () => {
  const { response, count, setCharacter, setCount, setRefetch } = useQuotes();

  const handleClick = () => {
    setRefetch(refetch => !refetch);
  };

  return (
    <>
      <div className={styles.Futurama}>
        <Quote quotes={response} />
        <section>
          <Button character="fry"
            image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
            setCharacter={setCharacter} />
          <Button character="leela"
            image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png"
            setCharacter={setCharacter} />
          <Button character="bender"
            image="https://images.uncyc.org/commons/thumb/a/a6/Bender_Rodriguez.png/300px-Bender_Rodriguez.png"
            setCharacter={setCharacter} />
          <Button character="professor-farnsworth"
            image="https://vignette.wikia.nocookie.net/en.futurama/images/4/4e/Farnsworth.png"
            setCharacter={setCharacter} />
          <Button character="zapp-brannigan"
            image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/Zapp_Brannigan.png"
            setCharacter={setCharacter} />
          <Button character="dr-zoidberg"
            image="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png"
            setCharacter={setCharacter} />
        </section>
        <div>
          <p>How many Quotes would you like? (1-10):  </p>
          <input type="number" value={count} name="count" min="1" max="10"
            onChange={({ target }) => setCount(target.value)} />
        </div>
        <button onClick={handleClick} >Refresh Quotes</button>
      </div>
    </>
  );
};

export default FuturamaFn;
