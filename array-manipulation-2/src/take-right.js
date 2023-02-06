/* exported takeRight */

/* define a function named takeRight with two parameters array and count
assign an empty array to a new variable newArray
create an if statement checking array length against the count
if true return the array
loop through the array starting at the array length - count till the array length
assigning it to newArray at the index of iteration i minus the array length minus the count.
return newArray */

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  } else {
    for (var i = (array.length - count); i < array.length; i++) {
      newArray[i - (array.length - count)] = array[i];
    }
  }
  return newArray;
}
