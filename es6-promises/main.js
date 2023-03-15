import takeAChance from './take-a-chance.js';

const lottery = takeAChance('Kristian');

lottery.then((value) => console.log(value))
  .catch((Error) => console.log(Error.message));
