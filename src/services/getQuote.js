export const getQuote = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  return fetch('http://futuramaapi.herokuapp.com/api/quotes/100')
    .then(res => res.json())
    .then(res => res[randomNumber]);
};
