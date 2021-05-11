function slice(array, startIndex = 0, endIndex = array.length) {
  const result = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    const value = array[index];

    if (index < array.length) {
      push(result, value);
    }
  }

  return result;
}
