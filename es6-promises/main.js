import takeAChance from './take-a-chance.js';

const lottery = takeAChance('Kristian');

lottery.then((value) => console.log(value))
  .catch((error) => console.log(error.message));
