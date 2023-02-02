/* exported countdown */
function countdown(number) {
  var i = number;
  var array = [];
  while (i >= 0) {
    array.push(i);
    i--;
  }
  return array;
}
