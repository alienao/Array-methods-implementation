function splice(array, insertAtIndex, removeNumberOfElements, ...values) {
  const firstPart = slice(array, 0, insertAtIndex);
  const secondPart = slice(array, insertAtIndex + removeNumberOfElements);

  const removedElements = slice(
    array,
    insertAtIndex,
    insertAtIndex + removeNumberOfElements
  );

  const joinedParts = firstPart.concat(values, secondPart);
  const { length: joinedPartsLength } = joinedParts;

  for (let index = 0; index < joinedPartsLength; index += 1) {
    array[index] = joinedParts[index];
  }

  array.length = joinedPartsLength;

  return removedElements;
}
const arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 2, 3, 4, 5);
console.log(arr);
