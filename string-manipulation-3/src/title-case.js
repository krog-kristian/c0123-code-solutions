/* exported titleCase */
// need to lowercase string first.
function titleCase(string) {
  var newString = '';
  var stringArray = string.split(' ');
  var lowercased = '';
  var capital = '';
  for (var i = 0; i < stringArray.length; i++) {
    switch (stringArray[i]) {
      case 'and':
        newString += stringArray[i].toLowerCase() + ' ';
        break;
      case 'or':

    }
    lowercased = stringArray[i].toLowerCase();
    capital = stringArray[i][0].toUpperCase();
    newString += (capital + (lowercased.slice(1)) + ' ');
  }
  return newString.trim(); // this trims off the white space
}
