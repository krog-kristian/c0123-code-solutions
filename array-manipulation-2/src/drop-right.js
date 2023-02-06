/* exported dropRight */

/* define a function named dropRight with two parameters an array and count
create a new variable newArray and assign it an array literal
do an if statement and if count === 0 or count greater or equal array.length
return the newarray
else
do a for loops from index 0 to the arrays length minus the count - 1
assign each iteration as the index of newArray of the array
return newArray */

function dropRight(array, count) {
  var newArray = [];
  if (count >= array.length) {
    return newArray;
  } else if (count === 0) {
    return array;
  } else {
    for (var i = 0; i < (array.length - count); i++) {
      newArray[i] = array[i];
    }
  }
  return newArray;
}
