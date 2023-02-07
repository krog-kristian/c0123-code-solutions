/* exported truncate */

/* define a function named truncate with two parmeters length and string

return string sliced at 0 to the length and concatenate an ellipsis ('...')
*/

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
