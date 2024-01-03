- ### Dijkstras algorithm vs Breadth-first search

  breadth-first search will return the path with the fewest segments
  (shortest path). What if, instead, you want to take the faster path.
  The fastest path can be found with a different algorithm called
  Dijkstra's algorithm.

- ### Dijkstras algorithm

  Find the vertex with the least weight. This is the peak you can reach in the shortest possible time.
  Check if there is a cheaper route to the neighbors of that vertex. If there is, update their costs.
  Repeat until you have done this for each vertex of the graph. Calculate the final path. (page 189)

- ### DAG Directed Acyclic Graph

  An undirected graph indicates that two vertices can point to each other.
  In other words, an undirected graph is a cycle! With an undirected graph,
  each vertex adds a new cycle. O Dijkstra's algorithm only works with
  directed acyclic graphs. (DAG)

- ### Edges with NEGATIVE weights.
  You can't use Dijkstra's algorithm if you have edges
  with negative weights. In other words, negative numbers
  ruin the algorithm. (use Bellman-Ford algorithm)
