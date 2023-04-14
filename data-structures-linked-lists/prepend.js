import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newNode = new LinkedList(value);
  newNode.next = list;
  return newNode;
}
