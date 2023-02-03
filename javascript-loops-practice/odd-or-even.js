/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOdd = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      evenOdd.push('even');
    } else {
      evenOdd.push('odd');
    }
  }
  return evenOdd;
}
