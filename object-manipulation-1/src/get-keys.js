/* exported getKeys */

/* define a function named getKeys with parameter object
create a variable keys with value of object literal
do a for in loop of constant key in object
push the key into the variable keys
return keys */

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
