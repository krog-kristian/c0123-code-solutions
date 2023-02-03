/* exported isUpperCased */

/* declare a function isUpperCased with one parameter a string
compare the string strictly with the string called with the toUpperCase method
if true return true.
else return false */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
