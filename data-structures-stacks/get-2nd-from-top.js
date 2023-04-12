export default function get2ndFromTop(stack) {
  const data = stack.pop();
  if (data === undefined) {
    return data;
  }
  const dataTwo = stack.pop();
  if (dataTwo === undefined) {
    stack.push(data);
    return dataTwo;
  }
  const putBack = dataTwo;
  stack.push(putBack);
  stack.push(data);
  return dataTwo;
}
