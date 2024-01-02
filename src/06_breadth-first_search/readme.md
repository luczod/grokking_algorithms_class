- ### Shortest path problem

  In this problem, you will always try to find the minimum path to something,
  such as the shortest route to your friend's house, or also the minimum
  number of moves to achieve checkmate in a game of chess.

- ### Breadth first search

  Is there a path from vertex A to vertex B?
  What is the shortest path from vertex A to vertex B?

- ### Conection in Graph

  You would prefer a first-degree connection over a second-degree connection,
  and a second-degree connection over a third-degree connection, and so on.
  Therefore, you should not search for any connection second degree before you
  are sure that a first degree connection does not exist.

- ### Queue

  First-degree connections are added to the search before
  second-degree connections, requiring the use of queues.

- ### Runtime

  Breadth-first search has execution time O(number of people + number of edges),
  which is often written as O(V+A) (V for number of vertices, A for number of edges).

- ### Topological Ordering

  You could say that this list is, in a way, ordered. If task A depends on task B,
  task A appears later in the list. This is called topological sorting.

- ### Tree
  This is called a tree. A tree is a special type of graph in which no edges
  ever point back.
