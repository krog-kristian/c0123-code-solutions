/* exported tail */

/* declare a function tail with one parameter array
declare a variable tail and assign it the value array literal
loop through the array starting at one
and assigning it to the tail array at iteration - 1
return tail array  */

function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail[i - 1] = array[i];
  }
  return tail;
}
