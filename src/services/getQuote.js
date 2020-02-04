export const getQuote = (character, count) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.json());
};
