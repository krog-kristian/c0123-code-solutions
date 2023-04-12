export default function insertUnderTop(stack, value) {
  const data = stack.peek();
  if (data === undefined) {
    return;
  }
  const top = stack.pop();
  stack.push(value);
  stack.push(top);
}
