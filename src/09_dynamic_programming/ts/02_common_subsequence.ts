import { dpTable, tableBlue, tableClues } from './01_common_substring';
// All solutions in dynamic programming involve a table.

console.table(dpTable);
// i -> row
// j -> column
for (let i = 0; i < tableBlue.length; i++) {
  for (let j = 0; j < tableClues.length; j++) {
    if (tableClues[j] == tableBlue[i]) {
      // if the letters are the same,
      // the value is equal to the value of the upper left neighbor + 1
      dpTable[j][i] = dpTable[j - 1][i - 1] + 1;
    } else {
      // if the letters are not the same
      // choose the biggest one among them
      dpTable[j][i] = Math.max(j > 0 ? dpTable[j - 1][i] : 0, i > 0 ? dpTable[j][i - 1] : 0);
    }
  }
}

console.table(dpTable);
