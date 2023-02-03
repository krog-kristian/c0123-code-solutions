/* exported reverseWord */

/* declare a function named reverseWord that takes one parameter word
declare a variable reverse that is an empty string
loop through the string from last index to 0 index
concatenate the current index of i of the word with reverse.
after the loop return the reverse variable */

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
