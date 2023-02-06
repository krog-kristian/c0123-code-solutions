/* exported getValues */

/* define a function named getValues with the parameter object
create a variable values assigned with an arry literal
do a for in loop of the property keys in the object
push to the array values the value of each key of the object
return values */

function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
