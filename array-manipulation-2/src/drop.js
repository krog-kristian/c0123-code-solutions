/* exported drop */

/* define a function named drop with two parameters array and count
create a variable newArray assign it the value of an empty array
an iff station to check if the array length is 0
returns array if tru
else creates a loop starting at the count -1 as the start index and goes up till the array length
and assigns the array at the iteration and assigns it to new array starting at i minus the count
returns newArray */

function drop(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return array;
  } else {
    for (var i = (count - 1); i < array.length; i++) {
      newArray[i - (count)] = array[i];
    }
  }
  return newArray;
}
