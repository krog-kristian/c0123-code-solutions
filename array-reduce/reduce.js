function reduce(array, reducer, initialValue = array[0]) {
  let item = initialValue;
  for (let i = 0; i < array.length; i++) {
    item = reducer(item, array[i]);
  }
  return item;
}
