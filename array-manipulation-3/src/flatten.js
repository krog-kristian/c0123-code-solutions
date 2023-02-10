/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        newArray.push(array[i][k]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
