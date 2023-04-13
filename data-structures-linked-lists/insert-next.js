/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function insertNext(list, value) {
  const newNode = new LinkedList(value);
  const second = list.next;
  newNode.next = second;
  list.next = newNode;
  return list;
}
