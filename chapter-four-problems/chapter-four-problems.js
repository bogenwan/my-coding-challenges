const DirectedGraph = require('./util/DirectedGraph.js');
const Queue = require('./util/Queue.js');
const Stack = require('./util/Stack.js');
const BinarySearchTree = require('./util/BinarySearchTree.js');

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
let testarray = [1, 2, 3, 4, 5, 6, 7];
var BST = new BinarySearchTree();

const minimalTree = function(arr, tree) {
  let copied = arr.slice();
  let middleNum = copied.splice(Math.floor(copied.length / 2), 1)[0];
  let left = copied.splice(0, Math.floor(copied.length / 2));
  let right = copied;
  tree.insert(middleNum);
  if (left.length < 2 && right.length < 2) {
    tree.insert(left[0]);
    tree.insert(right[0]);
  } else {
    minimalTree(left, tree);
    minimalTree(right, tree);
  }
  return tree;
};

console.log(minimalTree(testarray, BST));

module.exports = {
  minimalTree,
};