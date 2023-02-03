/* exported includesSeven */
function includesSeven(array) {
  var isThere7 = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isThere7 = true;
      break;
    }
  }
  return isThere7;
}
