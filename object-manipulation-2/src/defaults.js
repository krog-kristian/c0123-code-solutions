/* exported defaults */

function defaults(target, source) {
  for (const key in source) {
    if (!Object.hasOwn(target, key)) {
      target[key] = source[key];
    }
  }
}
