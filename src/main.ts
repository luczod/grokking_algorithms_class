import { dpTable, tableBlue, tableClues } from './09_dynamic_programming/ts/01_common_substring';
import './style.css';

for (let i = 0; i < tableBlue.length; i++) {
  for (let j = 0; j < tableClues.length; j++) {
    if (tableClues[j] == tableBlue[i]) {
      // if the letters are the same,
      // the value is equal to the value of the upper left neighbor + 1
      dpTable[j][i] = dpTable[j - 1][i - 1] + 1;
    } else {
      // if the letters are not the same
      // choose the biggest one among them
      if (i === 0 && j === 0) {
        dpTable[j][i] = Math.max(dpTable[0][i], dpTable[j][0]);
      } else if (i === 0) {
        dpTable[j][i] = Math.max(dpTable[j - 1][i], dpTable[j][0]);
      } else if (j === 0) {
        dpTable[j][i] = Math.max(dpTable[0][i], dpTable[j][i - 1]);
      } else {
        dpTable[j][i] = Math.max(dpTable[j - 1][i], dpTable[j][i - 1]);
      }
    }
  }
}

console.table(dpTable);
