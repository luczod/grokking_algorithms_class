// three hash tables required (graph, costs, parents) { [key: string]: TGraph };
type TGraphWeight = { [key: string]: { [key: string]: number } };
type TCoast = { [key: string]: number };
type TParents = { [key: string]: string | null };

// the graph
const graphWeight: TGraphWeight = {};
graphWeight['start'] = {};
graphWeight['start']['a'] = 6;
graphWeight['start']['b'] = 2;
graphWeight['a'] = {};
graphWeight['a']['fin'] = 1;
graphWeight['b'] = {};
graphWeight['b']['a'] = 3;
graphWeight['b']['fin'] = 5;
graphWeight['fin'] = {};

console.log(graphWeight);

// the costs table
const costs: TCoast = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// the parents table
const parents: TParents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

// Avoid being processed more than once:
const processed: string[] = [];

function findLowestCostNode(costs: TCoast): string {
  let lowestCost = Infinity;
  let lowestCostNode: string = '';
  // Go through each node.
  for (const node in costs) {
    const cost = costs[node];
    // If it's the lowest cost so far and hasn't been processed yet
    if (cost < lowestCost && !processed.includes(node)) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}
let node = findLowestCostNode(costs);
export function dijkstras() {
  // Find the lowest-cost node that you haven't processed yet.
  while (node !== '') {
    const cost = costs[node];
    console.log(node, cost);
    // Go through all the neighbors of this node.
    const neighbors = graphWeight[node];
    for (const n of Object.keys(neighbors)) {
      const newCost = cost + neighbors[n];
      // If it's cheaper to get to this neighbor by going through this node
      if (costs[n] > newCost) {
        // update the cost for this node.
        costs[n] = newCost;
        // This node becomes the new parent for this neighbor.
        parents[n] = node;
      }
    }
    // Mark the node as processed.
    processed.push(node);
    // Find the next node to process, and loop.
    node = findLowestCostNode(costs);
  }
}
dijkstras();
console.log('Cost from the start to each node:');
console.table(costs);
