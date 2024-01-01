function findSmallest(arr: number[]): number {
  // Stores the possible smallest value
  let smallest = arr[0];
  // Stores the index of the smallest value
  let smallest_index = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < smallest) {
      smallest_index = i;
      smallest = arr[i];
    }
  }
  return smallest_index;
}

function selectionSort(arr: number[]): number[] {
  const { length } = arr;
  const newArr: number[] = [];
  let smallest: number;

  for (let i = 0; i < length - 1; i++) {
    smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  console.log(newArr);
  return newArr;
}

const arr = [5, 5, 3, 6, 2, 10, 5, 2, 3, 6, 9];
selectionSort(arr);
