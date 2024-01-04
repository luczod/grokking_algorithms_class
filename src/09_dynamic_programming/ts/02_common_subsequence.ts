import { dpTable, tableBlue, tableClues } from './01_common_substring';
// All solutions in dynamic programming involve a table.

console.table(dpTable);
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
      // choose the biggest one among them
      dpTable[i][j] = Math.max(dpTable[j - 1][i], dpTable[j][i - 1]);
    }
  }
}

console.table(dpTable);
