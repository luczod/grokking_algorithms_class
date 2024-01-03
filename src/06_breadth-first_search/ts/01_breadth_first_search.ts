import { TGraph, graph } from './Graph';
import { Deque } from './dequeClass';

function personIsSeller(name: string): boolean {
  return name.at(-1) == 'm';
}

function breadthFirstSearch(startVertex: string, graph: TGraph): boolean {
  const searchDeque = new Deque<string>();
  console.log(searchDeque);
  graph[startVertex].forEach((vertex) => searchDeque.addBack(vertex));

  // This is how you keep track of which people you've searched before.
  const searched = new Set<string>();

  while (searchDeque.isEmpty) {
    // remove the list fist person in left side
    const person = searchDeque.removeFront();
    // console.log(person);
    // Only search this person if you haven't already searched them.
    if (person in searched) continue;
    if (personIsSeller(person)) {
      console.log(person + ' is find!');
      return true;
    }
    // Then check the vertex(person), add its neighbors
    graph[person].forEach((vertex) => searchDeque.addBack(vertex));
    console.log(searched);
    // Marks this person as searched
    searched.add(person);
  }

  return false;
}

breadthFirstSearch('you', graph);
