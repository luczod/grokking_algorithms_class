// All solutions in dynamic programming involve a table.
export const tableBlue = Array.from('blue');
export const tableClues = Array.from('clues');

export const dpTable = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
// i -> row
// j -> column
for (let i = 0; i < tableBlue.length - 1; i++) {
  for (let j = 0; j < tableClues.length - 1; j++) {
    if (tableClues[j] == tableBlue[i]) {
      // if the letters are the same,
      // the value is equal to the value of the upper left neighbor + 1
      dpTable[i][j] = dpTable[i - 1][i - 1] + 1;
    } else {
      // if the letters are not the same
      dpTable[i][j] = 0;
    }
  }
}

console.table(dpTable);
