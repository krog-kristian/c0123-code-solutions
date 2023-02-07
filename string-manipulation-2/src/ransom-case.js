/* exported ransomCase */

/* define a function named ransomCase with 1 parameter string
create a variable assigned to an empty string.
loop throught the string start to end
if the index  plus 1 is even
create a variable assigned the the current iteration of the string sliced
concatenate the variable a uppercased to new string
else if odd
assign the sliced index of string to a variable b
concatenate the lowercased version to the newString
return new string */

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if ((i + 1) % 2 === 0) {
      var a = string.slice(i, i + 1);
      newString += a.toUpperCase();
    } else {
      var b = string.slice(i, i + 1);
      newString += b.toLowerCase();
    }
  }
  return newString;
}
// gotta slice off and concatenate
