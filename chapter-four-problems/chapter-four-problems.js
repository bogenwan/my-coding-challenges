const DirectedGraph = require('./util/DirectedGraph.js');
const Queue = require('./util/Queue.js');

DirectedGraph.prototype.routeBetweenNode = function (fromNode, toNode) {
  let queue = new Queue();
  let visited = {};
  let fromNodeArray = this.nodes[fromNode];
  // for (let i = 0; i < nodeArray.length; i++) {
  //   if (nodeArray[i] === toNode) {
  //     return 'Have Edge';
  //   } else if (nodeArray[i] !== toNode && this.nodes[nodeArray[i]].length) {
  //     let innerList = this.nodes[nodeArray[i]];
  //     for (let j = 0; j < innerList.length; j++) {
  //       queue.enqueue(innerList[j]);
  //     }
  //   }
  // }
  // while (queue.length) {
  //   console.log(queue.dequeue());
  // };
  queue.enqueue(fromNode);
  while (!queue.isEmpty()) {
    let currNode = queue.dequeue();
    visited[currNode] = true;
    console.log(visited);
  }
  // console.log(this.nodes[fromNode])
  // console.log(toNode)
};

const testGraph = new DirectedGraph();
testGraph.addNode('A');
testGraph.addNode('B');
testGraph.addNode('C');
testGraph.addNode('D');
testGraph.addNode('E');
testGraph.addEdge('A', 'B');
testGraph.addEdge('A', 'D');
testGraph.addEdge('B', 'C');
testGraph.addEdge('B', 'D');
testGraph.addEdge('D', 'E');

console.log(testGraph.routeBetweenNode('A', 'E'));
