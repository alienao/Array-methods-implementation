function fill(array, value, startIndex = 0, endIndex = array.length) {
  for (let index = startIndex; index <= endIndex; index += 1) {
    array[index] = value;
  }

  return array;
}
