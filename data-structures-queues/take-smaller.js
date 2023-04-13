export default function takeSmaller(queue) {
  if (queue.peek() === undefined) return queue.peek();
  const first = queue.dequeue();
  if (queue.peek() === undefined) return first;
  const second = queue.dequeue();
  if (first <= second) {
    queue.enqueue(second);
    return first;
  }
  queue.enqueue(first);
  return second;
}
