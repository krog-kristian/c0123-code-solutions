/* exported chunk */
/*
function chunk(array, size) {
  var newArray = [];
  var chunk = [];
  for (var i = 0; i < array.length; i + size) {
    for (var k = 0; k < size; k++) {
      var a = array[i + k];
      if (a === undefined) {
        newArray.push(chunk);
        return newArray;
      } else {
        chunk[k] = a;
      }
    }
    newArray.push(chunk);
    chunk = [];
  }
  return newArray;
}
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
  newArray.push(chunk); // appears that when the chunk does not hit full size on last iterations it is not pushed?
  return newArray;
}
