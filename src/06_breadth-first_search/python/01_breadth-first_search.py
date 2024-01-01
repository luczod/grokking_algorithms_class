# importando uma fila(queue)
from collections import deque

""" def person_is_seller(name):
      # verifica se o ultimo elemnto da string é "m"
      return name[-1] == 'm' """


def person_is_jonny(name):
    return name == 'jonny'


# grafo em python
graph = {}
graph["you"] = ["alice", "claire", "bob"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


def search(name):
    search_queue = deque()
    print(search_queue)
    search_queue += [name]
    print(search_queue)
    # This is how you keep track of which people you've searched before.
    searched = set()
    while search_queue:
        #  remove the list fist person in left side
        person = search_queue.popleft()
        print(person)
        # Only search this person if you haven't already searched them.
        if person in searched:
            continue
        if person_is_jonny(person):
            # print(person + " is a mango seller!")
            print(person + " is find!")
            return True
        # depois verificar o vertice(person), adiciona o seus vizinhos
        search_queue += graph[person]
        # Marks this person as searched
        searched.add(person)
    return False


search("you")
