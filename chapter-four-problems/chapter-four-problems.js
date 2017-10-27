const DirectedGraph = require('./util/DirectedGraph.js');
const Queue = require('./util/Queue.js');
const Stack = require('./util/Stack.js');

DirectedGraph.prototype.breadthFirstTravers = function (node) {
  let needToVisitQueue = new Queue();
  let visited = {};
  visited[node] = true;
  needToVisitQueue.enqueue(node);
   while (!needToVisitQueue.isEmpty()) {
    let currNode = needToVisitQueue.dequeue();
    let currNodeAdjList = this.nodes[currNode];
    for (let i = 0; i < currNodeAdjList.length; i++) {
      if (visited[currNodeAdjList[i]] === undefined) {
        visited[currNodeAdjList[i]] = true;
        needToVisitQueue.enqueue(currNodeAdjList[i]);
      }
    }
  }
};

DirectedGraph.prototype.depthFirstSearch = function (node) {
  let needToVisitStack = new Stack();
  let visited = {};
  visited[node] = true;
  needToVisitStack.push(node);
  while (!needToVisitStack.isEmpty()) {
    let currNode = needToVisitStack.pop();
    let currNodeArray = this.nodes[currNode];
    for (let i = 0; i < currNodeArray.length; i++) {
      if (visited[currNodeArray[i]] === undefined) {
        visited[currNodeArray[i]] = true;
        needToVisitStack.push(currNodeArray[i]);
      }
    }
  }
};

DirectedGraph.prototype.routeBetweenNode = function (fromNode, toNode) {
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

// const testGraph = new DirectedGraph();
// testGraph.addNode('A');
// testGraph.addNode('B');
// testGraph.addNode('C');
// testGraph.addNode('D');
// testGraph.addNode('E');
// testGraph.addEdge('A', 'B');
// testGraph.addEdge('A', 'D');
// testGraph.addEdge('B', 'C');
// testGraph.addEdge('B', 'D');
// testGraph.addEdge('D', 'E');
// testGraph.addEdge('E', 'A');

// console.log(testGraph.breadthFirstTravers('A'));
// console.log(testGraph.depthFirstSearch('A'));
// console.log(testGraph.routeBetweenNode('D', 'A'));


