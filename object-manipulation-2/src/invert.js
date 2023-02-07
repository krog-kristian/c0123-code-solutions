/* exported invert */

function invert(source) {
  var keys = Object.keys(source);
  var values = Object.values(source);
  var invertedObject = {};
  for (var i = 0; i < keys.length; i++) {
    invertedObject[values[i]] = keys[i];
  }
  return invertedObject;
}
