export default function updateNext(list, value) {
  if (list.next === null) return;
  list.next.data = value;
}
