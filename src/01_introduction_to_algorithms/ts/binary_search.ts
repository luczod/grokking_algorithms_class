class BinarySearch {
  private low: number = 0;
  private high: number = 0;

  search_iterative(item: number, list: number[]): number | null {
    this.high = list.length - 1;
    while (this.low <= this.high) {
      // check the middle element
      const mid: number = Math.round((this.low + this.high) / 2);
      const guess: number = list[mid];
      // Found the item.
      if (guess == item) {
        return mid;
      }
      // The guess was too high.
      else if (guess > item) {
        this.high = mid - 1;
      } else {
        // The guess was too low.
        this.low = mid + 1;
      }
    }
    // Item doesn't exist
    return null;
  }

  search_recursive(item: number, list: number[], low: number = 0, high?: number): number | null {
    this.low = low;
    high ? (this.high = high) : (this.high = list.length - 1);

    // Check base case
    if (this.high >= this.low) {
      // check the middle element
      const mid: number = Math.round((this.low + this.high) / 2);
      const guess: number = list[mid];

      // Found the item.
      if (guess == item) {
        return mid;
      }
      // If element is smaller than mid, then it can only
      // be present in left subarray
      else if (guess > item) {
        return this.search_recursive(item, list, this.low, mid - 1);
      } else {
        // The guess was too low.
        return this.search_recursive(item, list, mid + 1, this.high);
      }
    } else {
      // Item doesn't exist
      return null;
    }
  }
}

const bs = new BinarySearch();
const my_list = [1, 3, 5, 7, 9];

// console.log(bs.search_iterative(9, my_list)); // index 4
console.log(bs.search_recursive(9, my_list)); // index 4
