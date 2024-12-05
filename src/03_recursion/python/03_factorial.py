def fact(x: int) -> int:
    # caso-base
    if x == 1:
        return 1
    # caso-recursivo
    else:
        return x * fact(x-1)


print(fact(5))
