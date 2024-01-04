export const moviesRate = {
  priyanka: [3, 4, 4, 1, 4],
  justin: [4, 3, 5, 1, 5],
  morpheus: [2, 5, 1, 3, 1],
};

export function pythagorean(x: number[], y: number[]): number {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Math.pow(x[i] - y[i], 2);
  }
  console.log(sum);
  // return Math.sqrt(sum); ??
  return sum;
}

/* pythagorean(moviesRate.priyanka, moviesRate.justin);
pythagorean(moviesRate.priyanka, moviesRate.morpheus); */
