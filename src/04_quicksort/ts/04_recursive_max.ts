function maxRecursive(arr: number[], num: number): number {
  const { length } = arr;

  if (num == 1) {
    return arr[0];
  }
  // console.log(num);

  return Math.max(arr[num - 1], maxRecursive(arr, num - 1));
}
const A = [5, 5, 3, 6];
const n = A.length;
console.log(maxRecursive(A, n));
