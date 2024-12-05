class BinarySearch():

    def search_iterative(self, arr: list[int], item: int) -> (int | None ):
        # low and high keep track of which part of the list you'll search in.
        low = 0
        high = len(arr) - 1

        # While you haven't narrowed it down to one element ...
        while low <= high:
            # ... check the middle element
            mid = (low + high) // 2
            guess = arr[mid]
            # Found the item.
            if guess == item:
                return mid
            # The guess was too high.
            if guess > item:
                high = mid - 1
            # The guess was too low.
            else:
                low = mid + 1

        # Item doesn't exist
        return None

    def search_recursive(self, arr: list[int], low: int, high: int, item: int) -> (int | None ):
        # Check base case
        if high >= low:
            mid = (high + low) // 2
            guess = arr[mid]

            # If element is present at the middle itself
            if guess == item:
                return mid

            # If element is smaller than mid, then it can only
            # be present in left subarray
            elif guess > item:
                return self.search_recursive(arr, low, mid - 1, item)

            # Else the element can only be present in right subarray
            else:
                return self.search_recursive(arr, mid + 1, high, item)

        else:
            # Element is not present in the array
            return None


if __name__ == "__main__":
    # We must initialize the class to use the methods of this class
    bs = BinarySearch()
    my_list = [1, 3, 5, 7, 9]

    print(bs.search_iterative(my_list, 9))  # => retorna a posição no array

    # 'None' means null in Python. We use to indicate that the
    # item wasn't found.
    print(bs.search_iterative(my_list, 10))  # => None
