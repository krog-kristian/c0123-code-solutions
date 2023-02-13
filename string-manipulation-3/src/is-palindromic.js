/* exported isPalindromic */

/* define a function named isPalindromic with one parameter a string
create a variable  of array and assign it to the string split with an empty string
create a second variable named backwards and assign it an empty string
create a loop to go backwards through the array to index 0
concatenate each index with the variable backwards
an if statement to compare backwards stricly equal to the string
return true
else
return false */

function isPalindromic(string) {
  var array = string.split('');
  var backwards = '';
  var stringNoSpace = string.replaceAll(' ', '');
  for (var i = (array.length - 1); i >= 0; i--) {
    backwards += array[i];
  } backwards = backwards.replaceAll(' ', '');
  if (backwards === stringNoSpace) {
    return true;
  } else {
    return false;
  }
}
