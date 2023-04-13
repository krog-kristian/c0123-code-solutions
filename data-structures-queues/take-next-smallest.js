export default function takeNextSmallest(numberQueue) {
  if (numberQueue.peek() === undefined) return numberQueue.peek();
  let first = numberQueue.dequeue();
  if (numberQueue.peek() === undefined) return first;
  while (first > numberQueue.peek()) {
    numberQueue.enqueue(first);
    first = numberQueue.dequeue();
  }
  return first;
}
