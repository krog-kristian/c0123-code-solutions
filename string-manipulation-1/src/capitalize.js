/* exported capitalize */

/* declare a function named capitalized with one parameter a word
create a variable name lowWord and assign it with the method tolowercase of the word
create a second variable capWord and assign it to the index 0 of word touppercase method.
return return capWord concatenated with lowWord slicing of the zero index */

function capitalize(word) {
  var lowWord = word.toLowerCase();
  var capWord = word[0].toUpperCase();
  return capWord + (lowWord.slice(1));
}
