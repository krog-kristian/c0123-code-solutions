/* exported difference */
/* define a function named difference with two parameters first and second which are arrays
create a variable name newArray assigned with array literal
loop through first from 0 index to last index
if second includes the current index of first
continue
else push the current index of first into newArray
after create a second loops to loop through 0 index to last index of second
comparing is first includes the current index of second
if true continure
else push the current index of second into newArray
after return newArray */

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      newArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (first.includes(second[k])) {
      continue;
    } else {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
