/* exported take */

/* define a function named take with two parameter an array and a number(count)
create a variable newArray assigned with an array literal
do an if statement, if array length is zero
return newArray
else do a for loop and loop array till count -1
using the method push on newArray on the value of array at the current iteration
return newArray */

function take(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
