/* exported defaults */

function defaults(source, target) {
  var cheater = target;
  Object.assign(source, target);
  Object.assign(cheater, target);
}
