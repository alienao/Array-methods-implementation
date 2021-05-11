function map(array, callback) {
  const result = [];
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    result[index] = callback(value, index, array);
  }

  return result;
}
