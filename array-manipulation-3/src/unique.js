/* exported unique */
/* define a function named unique with one paramter an array
create an array literal assigned to uniqueArray
create a loop for array from 0 index to last index
if uniqueArray passed through the includes method of the current array index value
do nothing
else push it into the uniqueArray
after return the uniqueArray */

function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.includes(array[i])) {
      continue;
    } else {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
