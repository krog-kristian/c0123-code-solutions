/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixAll = [];
  for (var i = 0; i < words.length; i++) {
    suffixAll.push(words[i] + suffix);
  }
  return suffixAll;
}
