function fat(num: number): number {
  if (num == 1) {
    return 1;
  } else {
    return num * fat(num - 1);
  }
}

fat(3);
