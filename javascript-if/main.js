/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var a = number < 5;
  return a;
}

function isEven(number) {
  var a = (number % 2) === 0;
  return a;
}

function startsWithJ(string) {
  var a = string[0] === 'J';
  return a;
}

function isOldEnoughToDrink(person) {
  var a = person.age >= 21;
  return a;
}

function isOldEnoughToDrive(person) {
  var a = person.age >= 16;
  return a;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'pH is neutral.';
  } else if (pH < 7 && !(pH < 0)) {
    return 'pH is acidic.';
  } else if (pH <= 14 && pH > 7) {
    return 'pH is basic.';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
