/* exported initial */

/* do what i did in tail except opposit jk
declare a function named intial with one parameter array
declare a variable intial with the value of an array literal
loop through the array starting at zero index and ending at the length of the array minus 2
assign the current iterations value as the index of the array to the current iteration to the intial array
return intial array */

function initial(array) {
  var intial = [];
  for (var i = 0; i < array.length - 1; i++) {
    intial[i] = array[i];
  }
  return intial;
}
