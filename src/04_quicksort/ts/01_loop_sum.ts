function sum(arr: number[]): number {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}

console.log(sum([1, 2, 3, 4]));
