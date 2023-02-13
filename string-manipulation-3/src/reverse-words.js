/* exported reverseWords */

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reversed = '';
  var chunk = '';
  for (var i = 0; i < stringArray.length; i++) {
    for (var k = (stringArray[i].length - 1); k >= 0; k--) {
      chunk += stringArray[i][k];
    }
    reversed += chunk + ' ';
    chunk = '';
  }
  return reversed.trim();
}
