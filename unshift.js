function unshift(array, ...values) {
  const mergedArrays = concat(values, ...array);
  const { length: mergedArraysLength } = mergedArrays;

  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];
    array[index] = value;
  }

  return array.length;
}
