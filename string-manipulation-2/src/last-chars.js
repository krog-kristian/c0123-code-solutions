/* exported lastChars */

/* define a function named lastChars with the parameter length and string
return string sliced at the index */

function lastChars(length, string) {
  if (string.length > length) {
    return string.slice(string.length - length);
  }
  return string;
}
