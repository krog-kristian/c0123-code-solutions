export default function take2nd(queue) {
  if (queue.peek() === undefined) return;
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}
