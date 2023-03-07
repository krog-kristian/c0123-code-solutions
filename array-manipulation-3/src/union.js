/* exported union */

/* define a function named union with two parameter first and second
create a variable newArray assigned with an array literal
loop through the first array from index 0 to index last
push the current index of first to the newArray
loop through the second array from index 0 to last index
if newarray includes the current index of second
continue
else
push the current index of second to the newArray
after return newArray */

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (newArray.includes(second[k])) {
      continue;
    } else {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
