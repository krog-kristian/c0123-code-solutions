/* exported reverse */

/* define a function named reverse with one parameter array
declare a variable reversed with the value of an array literal
loop through through the array from 0 to end
at the current iteration index of the variable reverse assign the index of the array at the array length minus 1 and minus the current iteration
return the variable reverse  */

function reverse(array) {
  var reversed = [];
  for (var i = 0; i < array.length; i++) {
    reversed[i] = array[array.length - (1 + i)];
  }
  return reversed;
}
