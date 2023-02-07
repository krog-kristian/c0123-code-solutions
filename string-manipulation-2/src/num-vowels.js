/* exported numVowels */
/* define a function numVowels with one parameter string
create a variable count and assign it the value of 0
create another variable the string toLowerCase assigned to test variabe;
loop through the test
create a switch statement with a case for each vowel lowercase
if true add 1 to the count
return the count */

function numVowels(string) {
  var count = 0;
  var test = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    switch (test[i]) {
      case 'a':
        count += 1;
        break;
      case 'e':
        count += 1;
        break;
      case 'i':
        count += 1;
        break;
      case 'o':
        count += 1;
        break;
      case 'u':
        count += 1;
        break;
    }
  }
  return count;
}
