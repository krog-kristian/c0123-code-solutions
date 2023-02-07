/* exported swapChars */

/* define a function nammes swapChars with 3 parameters, firstIndex, secondIndex and string
create a var letter 1 assigned with string at firstIndex
create a var letter 2 assigned string at secondIndex
create a var newString = stringsliced at 0 to first index - 1
newString concatenated with letter1 concatenated with string sliced firstIndex + 1 to second index - 1 concatenated with letter 2 concatenated with string sliced at secondIndex
return newString */

function swapChars(firstIndex, secondIndex, string) {
  var letter1 = string[firstIndex];
  var letter2 = string[secondIndex];
  var newString = string.slice(0, (firstIndex));
  newString += letter2 + string.slice((firstIndex + 1), (secondIndex)) + letter1 + string.slice((secondIndex + 1));
  return newString;
}
