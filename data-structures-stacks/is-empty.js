export default function isEmpty(stack) {
  const data = stack.peek();
  if (data === undefined) {
    return true;
  }
  return false;
}
