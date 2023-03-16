const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;

const sum = numbers.reduce(
  (bleh, blank) => bleh + blank, initialValue
);
console.log('Sum of numbers:', sum);

const initialProduct = 1;
const product = numbers.reduce(
  (accumalted, num2) => accumalted * num2, initialProduct
);

console.log('Product of numbers:', product);

const balance = account.reduce(
  (accumalted, num2) => {
    if (num2.type === 'deposit') {
      return accumalted + num2.amount;
    } else {
      return accumalted - num2.amount;
    }
  }, initialValue
);

console.log('Account balance:', balance);

const composite = traits.reduce((addTraits, nextTrait) =>
  Object.assign(addTraits, nextTrait)
);

console.log('An object from an array of properties:', composite);
