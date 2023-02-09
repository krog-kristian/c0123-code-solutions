/* exported flatten */
function flatten(array) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      return false;
    }
  }
}
