export default function removeTail(list) {
  if (list.next === null) return;
  let count = 0;
  let links = list;
  while (links.next !== null) {
    count++;
    links = links.next;
  }
  while (count > 1) {
    count--;
    list = list.next;
  }
  list.next = null;
}
