/* exported capitalizeWord */

/* define a function named capitallizeWord with 1 parameter word
create a variable name lowWord and assign it with the method tolowercase of the word
create a second variable capWord and assign it to the index 0 of word touppercase method.
create an if statement to check if lowWord is javascript
if true return JavaScript
return return capWord concatenated with lowWord slicing of the zero index */

function capitalizeWord(word) {
  var lowWord = word.toLowerCase();
  var capWord = word[0].toUpperCase();
  if (lowWord === 'javascript') {
    return 'JavaScript';
  }
  return capWord + (lowWord.slice(1));
}
