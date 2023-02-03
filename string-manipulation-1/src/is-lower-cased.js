/* exported isLowerCased */

/* declare a function isLowerCased with one paramter word
check the condition that word is strictly equal to word with the method toLowerCase
if true return true
return false */

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
