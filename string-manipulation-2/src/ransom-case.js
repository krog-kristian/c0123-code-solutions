/* exported ransomCase */

/* define a function named ransomCase with 1 parameter string

*/

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
