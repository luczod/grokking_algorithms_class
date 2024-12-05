def sum(arr: list[int]) -> int:
    if arr == []:
        return 0

    return arr[0] + sum(arr[1:])
