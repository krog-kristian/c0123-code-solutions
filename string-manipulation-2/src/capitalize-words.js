/* exported capitalizeWords */

/* define a function named capitilizaWords with a parameter string
create a variable named newString assigned to an empty string.
create a variable named stringArray and assign it to the string split at empty space
loop through the string array
at each index assign the value lowercased to a variable a
assign the indexed value of the array and the 0 index of that value capitalized to a variable b
concatenate the var a sliced at 1 index with the variable b and an empty space and concatenate it with newString
return newstring slicing off the last index.
 */

function capitalizeWords(string) {
  var newString = '';
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var a = stringArray[i].toLowerCase();
    var b = stringArray[i][0].toUpperCase();
    newString += (b + (a.slice(1)) + ' ');
  }
  return newString.slice(0, (newString.length - 1));
}
