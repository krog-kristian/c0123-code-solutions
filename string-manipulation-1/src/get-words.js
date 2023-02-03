/* exported getWords */

/* declare a function getWords with the value of a string
declare a variable an array and assign it with the split method of the  an empty space
if anArray at zero index is an empty string
then assign an array literal to anArray
and return it
otherwise return anArray  */

function getWords(string) {
  var anArray = string.split(' ');
  if (anArray[0] === '') {
    anArray = [];
    return anArray;
  }
  return anArray;
}
