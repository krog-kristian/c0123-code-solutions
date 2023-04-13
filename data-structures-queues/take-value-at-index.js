export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let i = 0;
  while (i < index) {
    i++;
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}
