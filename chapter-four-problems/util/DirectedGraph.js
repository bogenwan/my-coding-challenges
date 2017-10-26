const Queue = require('./Queue.js');

class DirectedGraph {
  constructor () {
    this.nodes = {};
  };

  addNode (node) {
    this.nodes[node] = [];
  };

  contains (node) {
    return this.nodes.hasOwnProperty(node) ? true : false;
  };

  removeNode (node) {
    while(this.nodes[node].length) {
      this.nodes[node] = [];
    }
    delete this.nodes[node];
  };

  hasEdge (fromNode, toNode) {
    return this.nodes[fromNode].indexOf(toNode) === -1 ? false : true;
  };

  addEdge (fromNode, toNode) {
    this.hasEdge(fromNode, toNode) ? null :
    this.nodes[fromNode].push(toNode);
  };

  removeEdge (fromNode, toNode) {
    this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode), 1);
  };

  removeAll () {
    this.nodes = {};
  };

  routeBetweenNode (fromNode, toNode) {
  if (fromNode === toNode) {
    return true;
  }
  let queue = new Queue();
  let visited = {};
  visited[fromNode] = true;
  queue.enqueue(fromNode);

  while (!queue.isEmpty()) {
    let currNode = queue.dequeue();
    let currNodeArray = this.nodes[currNode];
    for (let i = 0; i < currNodeArray.length; i++) {
      if (currNodeArray[i] === toNode) {
        return true;
      } else if (visited[currNodeArray[i]] === undefined) {
        visited[currNodeArray[i]] = true;
        queue.enqueue(currNodeArray[i]);
      }
    }
  }
  return false;
  };
};

// const testDirectedGraph = new DirectedGraph();

// testDirectedGraph.addNode('Johnny');
// testDirectedGraph.addNode('Emily');
// testDirectedGraph.addNode('Maurice');
// testDirectedGraph.addEdge('Johnny', 'Maurice');
// testDirectedGraph.removeAll();
// testDirectedGraph.addEdge;('Emily', 'Johnny');
// testDirectedGraph.removeEdge('Johnny', 'Maurice');
// testDirectedGraph.removeNode('Emily');
// console.log(testDirectedGraph.contains('Maurice'));

// console.log(testDirectedGraph);

module.exports = DirectedGraph;
