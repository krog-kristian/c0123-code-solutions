import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const inputs = [process.argv[3], Number(process.argv[2]), Number(process.argv[4])];

const runTime = (array) => {
  let value = null;
  switch (array[0]) {
    case 'plus':
      value = add(array[1], array[2]);
      break;
    case 'minus':
      value = subtract(array[1], array[2]);
      break;
    case 'times':
      value = multiply(array[1], array[2]);
      break;
    case 'over':
      value = divide(array[1], array[2]);
      break;
    default:
      console.log('Please input a number followed by an operation followed by another operation. Acceptable operators are: plus, minus, times and over.');
  }
  if (value) {
    console.log(value);
  }

};

runTime(inputs);
