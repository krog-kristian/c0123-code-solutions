export default function maxValue(stack) {
  let max = -Infinity;
  let data = stack.pop();
  while (data !== undefined) {
    if (data > max) {
      max = data;
    }
    data = stack.pop();
  }
  return max;
}
