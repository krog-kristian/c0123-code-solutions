/* exported chunk */
/*
define a function named chunk with two parameters array and size
crete a variable newArray assigned an array literal
create a new variable named chunk and assign it array literal
do a for loop from index 0 to the length of the array
an if statement checking if the current iteration plus one is divisible by size
if true push array at current index into chunk
push the chunk into newArray
reassign chunk to array literal
else
push array at current index into chunk
after the loop if chunk is equal to an empty array
return newArray
if not push the chunk into newArray
return newArray
*/

function chunk(array, size) {
  var newArray = [];
  var chunk = [];
  for (var i = 0; i < array.length; i++) {
    if ((i + 1) % size === 0) {
      chunk.push(array[i]);
      newArray.push(chunk);
      chunk = [];
    } else {
      chunk.push(array[i]);
    }
  }
  if (chunk.length === 0) {
    return newArray;
  }
  newArray.push(chunk);
  return newArray;
}
