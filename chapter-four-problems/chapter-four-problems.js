const DirectedGraph = require('./util/DirectedGraph.js');
const Queue = require('./util/Queue.js');
const Stack = require('./util/Stack.js');
const BinarySearchTree = require('./util/BinarySearchTree.js');
const linkedListUtil = require('./util/LinkedList.js');
var LinkedList = linkedListUtil.Linkedlist;

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
let unsortedArray = [4, 9, 1, 3, 7, 5, 8, 6, 2];
var unbalancedBST = new BinarySearchTree();
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

const createTree = function (arr, tree) {
  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
  }
  return tree;
};

let unbalancedTree = createTree(unsortedArray, unbalancedBST);
// console.log(unbalancedTree);
let testTree = minimalTree(testarray, BST);
// console.log(testTree);

const DFSinOrder = function (node) {
  if (!node) {
    return;
  } else {
    DFSinOrder(node.left);
    console.log(node.value);
    DFSinOrder(node.right);
  }
};
// console.log(DFSinOrder(testTree.root));

const DFSpreOrder = function (node) {
  if (!node) {
    return;
  } else {
    console.log(node.value);
    DFSpreOrder(node.left);
    DFSpreOrder(node.right);
  }
};
// console.log(DFSpreOrder(testTree.root));

const DFSpostOrder = function (node) {
  if (!node) {
    return;
  } else {
    DFSpostOrder(node.left);
    DFSpostOrder(node.right);
    console.log(node.value);
  }
};
// console.log(DFSpostOrder(testTree.root));

const BFStree = function (node) {
  if (!node) {
    return;
  }
  let queue = new Queue();
  queue.enqueue(node);
  while (!queue.isEmpty()) {
    let currNode = queue.dequeue();
    console.log(currNode.value);
    if (currNode.left) {
      queue.enqueue(currNode.left);
    }
    if (currNode.right) {
      queue.enqueue(currNode.right);
    }
  }
};
// console.log(BFStree(testTree.root));

const listOfDepths = function (tree) {
  let listArray = [];
  let level = 0;
  if (!tree.root) {
    return;
  }
  let queue = new Queue();
  let nextQueue = new Queue();
  queue.enqueue(tree.root);
  while(!queue.isEmpty()) {
    let currNode = queue.dequeue();
    if (!listArray[level]) {
      listArray[level] = new LinkedList();
      listArray[level].add(currNode.value);
    } else {
      listArray[level].add(currNode.value);
    }
    if (currNode.left) {
      nextQueue.enqueue(currNode.left);
    }
    if (currNode.right) {
      nextQueue.enqueue(currNode.right);
    }
    if (queue.isEmpty()) {
      queue = nextQueue;
      level++;
      nextQueue = new Queue();
    }
  }
  return listArray;
};
// console.log(listOfDepths(BST));

const getMaxHeight = function (node) {
  if (!node) {
    return 0;
  }
  return 1+ Math.max(getMaxHeight(node.left), getMaxHeight(node.right));
};
// console.log(getMaxHeight(unbalancedTree.root));

var smallArr = [5, 6, 3, 2, 1];
var smallBST = new BinarySearchTree();
var smallUnbalancedTree = createTree(smallArr, smallBST);

const checkBalanced = function (rootNode) {

  if (!rootNode) {
    return true;
  }
  if (Math.abs(getMaxHeight(rootNode.left) - getMaxHeight(rootNode.right)) <= 1 && checkBalanced(rootNode.left) && checkBalanced(rootNode.right)) {
    return true;
  } else {
    return false;
  }
};
// console.log(checkBalanced(testTree.root));
// console.log(checkBalanced(testTree));

var array2 = [1, 2, 3, 4, 5, 6];
var Tree2 = new BinarySearchTree();
var binaryTree2 = minimalTree(array2, Tree2);
// console.log(balancedTree2);

const checkBST = function (rootNode) {
  if (!rootNode || rootNode.left === null && rootNode.right === null) {
    return true;
  }

  function nodeChecker (currNode) {
    if (currNode.left === null && currNode.right.value > currNode.value) {
      return true;
    } else if (currNode.right === null && currNode.left.value < currNode.value) {
      return true;
    } else if (currNode.left.value < currNode.value && currNode.right.value > currNode.value) {
      return true;
    } else {
      return false;
    }
  }

  if (nodeChecker(rootNode) && checkBST(rootNode.left) && checkBST(rootNode.right)) {
    return true;
  } else {
    return false;
  }
};
// console.log(checkBST(binaryTree2.root));

const successor = (nodeValue, rootNode) => {
  if (!rootNode) {
    return;
  }
  let queue = new Queue();
  queue.enqueue(rootNode);
  while (!queue.isEmpty()) {
    currNode = queue.dequeue();
    if (currNode.value === nodeValue) {
      return [rootNode.left, rootNode.right];
      break;
    }
    if (rootNode.left) {
      queue.enqueue(currNode.left);
    }
    if (rootNode.right) {
      queue.enqueue(currNode.right);
    }
  }
};
console.log(successor(2, binaryTree2.root));


module.exports = {
  minimalTree,
  listOfDepths,
  createTree,
  checkBalanced,
  createTree,
  checkBST,
};