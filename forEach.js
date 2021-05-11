function forEach(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    callback(value, index, array);
  }
}
