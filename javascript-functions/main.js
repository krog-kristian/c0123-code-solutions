function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var tenMinSec = convertMinutesToSeconds(10);

console.log('converted minutes to seconds is:', tenMinSec);

function greet(name) {
  var greeting = 'Hello there, ' + name + '!';
  return greeting;
}

var greetKenobi = greet('General Kenobi');

console.log('result of greet function:', greetKenobi);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var rugArea = getArea(10, 4);

console.log('The area of my rug is:', rugArea);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var myFirstName = getFirstName({ firstName: 'Kristian', lastName: 'Krog' });

console.log('My first name is:', myFirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var myArray = ['Kenobi', 'Skywalker', 'Windu', 'Grievous'];

var lastElementOfMyArray = getLastElement(myArray);

console.log('The last item in myArray:', lastElementOfMyArray);
