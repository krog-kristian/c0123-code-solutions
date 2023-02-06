/* exported includes */

/* define a function includes with parameters array and value
create a for loop to loops the entire array
if the current iteration is equal to value
return true
else
return false */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
