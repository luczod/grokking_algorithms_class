def greet2(name: str) -> None:
    print("how are you, ", name, "?")


def bye():
    print("ok bye!")


def greet(name: str):
    print("hello, ", name, "!")
    greet2(name)
    print("getting ready to say bye...")
    bye()


greet("adit")
