function sumRecursive(arr: number[], index: number): number {
  const { length } = arr;

  if (index === length) {
    return 0;
  }

  return arr[index] + sumRecursive(arr, index + 1);
}

console.log(sumRecursive([1, 2, 3, 4], 0));
