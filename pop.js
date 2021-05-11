function pop(array) {
  const value = array[array.length - 1];

  array.length = array.length - 1;

  return value;
}
