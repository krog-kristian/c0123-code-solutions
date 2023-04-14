export default function removeTail(list) {
  if (list.next === null) return;
  while (list.next !== null) {
    const link = list.next;
    if (link.next === null) {
      list.next = null;
      return;
    }
    list = list.next;
  }
}
