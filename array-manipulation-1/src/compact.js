/* exported compact */

/* define a function named compact with one parameter array
declare a variable outputArray assigned an array literal
loop over the array start to finish
if the current iteration as an index of array is not strictly false or strictly NaN or 0 or -0, or undefined, or ''
then push the item to outputArray
return outputArray  */

function compact(array) {
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    var x = Boolean(array[i]);
    if (x) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
