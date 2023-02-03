/* exported toObject */

/* define a function named toObject with the parameter of an array keyValuePair
create a variable of object with a value object literal
assign the property of object with index zero of keyvalue pair as the property and keyvalue pair index 1 as the value.
return the object */

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
