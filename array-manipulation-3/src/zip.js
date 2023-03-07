/* exported zip */
/* create a function named zip with two paramets first and second representing arrays
create a variable named pair assigned to an empty array literal
create a variable named zippered and assign an empty array literal
compare the lengths of first and second
assign the shorter to the variable zipSecondus
do a loop for the length of zipSecondus from 0 to last index
assign the curent index of first and second as an array to var pair
push pair to the variable zippered
return zippered after the loop  */

function zip(first, second) {
  var pair = [];
  var zippered = [];
  if (first.length <= second.length) {
    var zipSecondus = first;
  } else {
    zipSecondus = second;
  }
  for (var i = 0; i < zipSecondus.length; i++) {
    pair = [first[i], second[i]];
    zippered.push(pair);
    pair = [];
  }
  return zippered;
}
