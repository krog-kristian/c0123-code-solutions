var num1 = 7;
var num2 = 11;
var num3 = 42;

var maximumValue = Math.max(num1, num2, num3);

console.log('the maximumValue is:', maximumValue);

var heroes = ['Master Chief', 'Rex', 'Jack Jack', 'Commander Sherpard'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('the randomIndex is:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('the random hero is:', randomHero);

var library = [
  {
    title: 'Brisingr',
    author: 'Christopher Paolini'
  },
  {
    title: 'HALO: The Fall of Reach',
    author: 'Eric Nylund'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook', firstBook);

var thursdayWar = {
  title: 'The Thursday War',
  author: 'Karen Travis'
};

var hobbit = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien'
};

library.push(thursdayWar);

library.unshift(hobbit);

library.splice(1, 1);

console.log('updated library:', library);

var fullName = 'Kristian Krog';

var firstAndLastName = fullName.split(' ');

console.log('first and last name:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('my first name in capitals:', sayMyName);
