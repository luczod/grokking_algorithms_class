def count(arr: list[int]) -> int:
    if not arr:
        return 0
    return 1 + count(arr[1:])
