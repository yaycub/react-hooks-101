export const getQuote = (character, count = 1) => {
  if(!count) return Promise.resolve([{ quote: 'Please input a quote amount!', character: 'Admin' }]);
  
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.json());
};
