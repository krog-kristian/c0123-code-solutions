/* exported titleCase */
// need to lowercase string first.
function titleCase(string) {
  string = string.toLowerCase();
  var newString = '';
  var stringArray = string.split(' ');
  var lowercased = '';
  var capital = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i][stringArray[i].length - 1] === ':') {
      var length = stringArray[i].length - 1;
      stringArray[i] = stringArray[i].slice(0, length);
      lowercased = stringArray[i + 1].toLowerCase();
      capital = stringArray[i + 1][0].toUpperCase();
      stringArray[i + 1] = ':' + capital + (lowercased.slice(1));
    }
    if (stringArray[i].includes('-')) {
      var hyphen = stringArray[i].split('-');
      hyphen[0] = hyphen[0][0].toUpperCase() + (hyphen[0].slice(1));
      hyphen[1] = hyphen[1][0].toUpperCase() + (hyphen[1].slice(1));
      stringArray[i] = hyphen[0] + '-' + hyphen[1];
    }
    switch (stringArray[i]) {
      case 'and':
        newString += stringArray[i] + ' ';
        break;
      case 'or':
        newString += stringArray[i] + ' ';
        break;
      case 'nor':
        newString += stringArray[i] + ' ';
        break;
      case 'but':
        newString += stringArray[i] + ' ';
        break;
      case 'a':
        newString += stringArray[i] + ' ';
        break;
      case 'an':
        newString += stringArray[i] + ' ';
        break;
      case 'the':
        newString += stringArray[i] + ' ';
        break;
      case 'as':
        newString += stringArray[i] + ' ';
        break;
      case 'at':
        newString += stringArray[i] + ' ';
        break;
      case 'by':
        newString += stringArray[i] + ' ';
        break;
      case 'for':
        newString += stringArray[i] + ' ';
        break;
      case 'in':
        newString += stringArray[i] + ' ';
        break;
      case 'of':
        newString += stringArray[i] + ' ';
        break;
      case 'on':
        newString += stringArray[i] + ' ';
        break;
      case 'per':
        newString += stringArray[i] + ' ';
        break;
      case 'to':
        newString += stringArray[i] + ' ';
        break;
      case 'javascript':
        newString += 'JavaScript ';
        break;
      case 'api':
        newString += 'API';
        break;
      default:
        lowercased = stringArray[i];
        capital = stringArray[i][0].toUpperCase();
        newString += (capital + (lowercased.slice(1)) + ' ');
    }
  }
  newString = newString.replaceAll(' :', ': ');
  var capFirst = newString.slice(0, 1);
  capFirst = capFirst.toUpperCase();
  var title = newString.slice(1);
  newString = capFirst + title;
  return newString.trim();
}
/* better way to do this would be a loop for the switch statement and the exceptions
in an array and compare each time */
