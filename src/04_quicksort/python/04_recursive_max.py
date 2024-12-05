def max_(arr: list[int]) -> (int | None):
    if len(arr) == 0:
        return None

    if len(arr) == 1:
        return arr[0]

    else:
        sub_max = max_(arr[1:])
        return arr[0] if arr[0] > sub_max else sub_max
