/* exported pick */

/* define a function named pick with two parameters, source and keys
create a variable named newObject assigned with an object literal
do a for in loop of each key in source
for each key do a loop from index 0 to length of the keys array
if keys at current index is equal to the current key in source and the value of the current key of source is not undefined
the key property and value of source is assigned to newObject as the property and value
return the new object */

/*
function pick(source, keys) {
  var newObject = {};
  for (const key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        newObject[key] = source[key];
      }
    }
  }
  return newObject;
}
*/

function pick(source, keys) {
  var newObject = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
