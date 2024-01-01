function partiton(arr: number[], pivot: number, subarr: 'right' | 'left') {
  if (subarr === 'right') {
    const subArray = arr.slice(1).filter((item) => item >= pivot);
    return subArray;
  } else {
    const subArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        subArray.push(arr[i]);
      }
      console.log(arr[i]);
    }
    return subArray;
  }
}

function quicksort(arr: number[]): number[] {
  // base case, arrays with 0 or 1 element are already "sorted"
  if (arr.length < 2) {
    return arr;
  } else {
    // recursive case
    const pivot = arr[0];
    // sub-array of all the elements less than the pivot
    const less: number[] = arr.slice(1).filter((item) => item <= pivot);
    // sub-array of all the elements greater than the pivot
    const greater: number[] = arr.slice(1).filter((item) => item >= pivot);
    // less subarray + pivot + greater subarray
    return quicksort(less).concat([pivot], quicksort(greater));
  }
}

console.log(quicksort([5, 5, 3, 6, 2]));
