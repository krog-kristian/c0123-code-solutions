/* exported isVowel */

/* declare a function isVowel with one parameter character
declare a variable x that is the character method toLowerCase
compare the value of x to a set of 'or' logical operators of a, e, i ,o, u, y
if true return true
if not return false */

function isVowel(character) {
  var x = character.toLowerCase();
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'y') {
    return true;
  }
  return false;
}
