/* exported isAnagram */

/* define a function named isAnagram with two paramets firstString and secondString
create a variable cleanedFirst assign the value of firstString with all spaces removed
assign the split letters of cleaned first back into cleanedFirst (will become an array)
create a variable cleanedSecond and assign it a value of secondString with all spaces removed
loop through the array cleanedFirst from 0 to end index
each iteration assign the result of the replace expression of the current cleanedFirst value replaced with an empty string in cleanedSecond
after the loop if cleanedSecond is no an empty string
return true
else return false.
 */

function isAnagram(firstString, secondString) {
  var cleanedFirst = firstString.replaceAll(' ', '');
  cleanedFirst = cleanedFirst.split('');
  var cleanedSecond = secondString.replaceAll(' ', '');
  for (var i = 0; i < cleanedFirst.length; i++) {
    cleanedSecond = cleanedSecond.replace(cleanedFirst[i], '');
  } if (cleanedSecond === '') {
    return true;
  } else {
    return false;
  }
}
