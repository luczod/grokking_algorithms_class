def sum_array(arr: list[int]):
    if not arr:
        return 0
    return arr[0] + sum_array(arr[1:])

print(sum_array([1,5,6,9,3,5,]))

