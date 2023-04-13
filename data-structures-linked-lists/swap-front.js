export default function swapFront(list) {
  if (list.next === null) return list;
  const second = list.next;
  const first = list;
  first.next = second.next;
  list = second;
  list.next = first;
  return list;
}
