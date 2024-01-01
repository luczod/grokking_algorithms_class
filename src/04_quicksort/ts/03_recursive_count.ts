function count(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  arr.pop();
  return 1 + count(arr);
}

const arr2 = [5, 5, 3, 6, 2, 10, 5, 2, 3, 6, 9];
console.log(count(arr2));
