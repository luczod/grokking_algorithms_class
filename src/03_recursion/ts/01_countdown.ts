function countDown(num: number): number {
  // base case
  if (num <= 0) {
    return 0;
  } else {
    console.log(num);
    return countDown(num - 1);
  }
}

countDown(5);
