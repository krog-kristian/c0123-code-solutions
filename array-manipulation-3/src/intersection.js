/* exported intersection */

/* define a function intersection with two parameters first and second
create a new variable newArray assigned an array literal
loop through first from index 0 to last
if the second does not include the curent index continue the loop
else push the current index to newArry
after return newArray */

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      continue;
    } else {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
