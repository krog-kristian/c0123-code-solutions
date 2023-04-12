export default function countValues(stack) {
  let data = stack.pop();
  let count = 0;
  while (data !== undefined) {
    count++;
    data = stack.pop();
  }
  return count;
}
