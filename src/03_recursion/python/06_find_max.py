def find_max(arr: list[int]):
    if len(arr) == 0:
        return 0
    elif len(arr) == 1:
        return arr[0]
    elif len(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]

    sub_max = find_max(arr[1:])

    return arr[0] if arr[0] > sub_max else sub_max
