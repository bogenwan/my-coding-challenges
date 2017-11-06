(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

console.log(listOfDepths(BST));


module.exports = {
  minimalTree,
  listOfDepths,
};
},{"./util/BinarySearchTree.js":2,"./util/DirectedGraph.js":3,"./util/LinkedList.js":4,"./util/Queue.js":5,"./util/Stack.js":6}],2:[function(require,module,exports){
const Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

class BinarySearchTree {
  constructor () {
    this.root = null;
  };

  insert (value) {
    if (!this.root) {
      this.root = new Node(value);
    }

    let nodeToAdd = new Node(value);

    function helper (child) {
      if (value < child.value) {
        if (!child.left) {
          child.left = nodeToAdd;
        } else {
          helper(child.left);
        }
      }
      if (value > child.value) {
        if (!child.right) {
          child.right = nodeToAdd;
        } else {
          helper(child.right);
        }
      }
    };
    helper(this.root)
  };

  contain (value) {
    let state = false;

    function helper (child) {
      if (child && child.value === value) {
        return state = true;
      }
      if (value < child.value) {
        if (!child.left) {
          return state = false;
        } else if (child.left.value === value) {
          return state = true;
        } else {
          helper(child.left);
        }
      }
      if (value > child.value) {
        if (!child.right) {
          return state = false;
        } else if (child.right.value === value) {
          return state = true;
        } else {
          helper(child.right);
        }
      }
    }
    helper(this.root)
    return state;
  };

  removeAll() {
    this.root = null;
  };
};

// let tree = new BinarySearchTree();

// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);

// console.log(tree);

module.exports = BinarySearchTree;

},{}],3:[function(require,module,exports){
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

},{"./Queue.js":5}],4:[function(require,module,exports){
const Node = function (value) {
  this.value = value;
  this.next = null;
};

class Linkedlist {
  constructor() {
    this.length = 0;
    this.head = null;
  };

  add (value) {
    let node = new Node(value);
    let currentHead = this.head;
    if (!currentHead) {
      this.head = node;
      this.length++;
    } else {
      while (currentHead.next) {
        currentHead = currentHead.next;
      }
      currentHead.next = node;
      this.length++;
    }
  };

  removeOne (value) {
    let currentHead = this.head;
    let previousHead = null;
    if (currentHead.value === value) {
      this.head = currentHead.next;
      this.length--;
    } else {
      previousHead = currentHead;
      currentHead = currentHead.next;
      while (currentHead.next) {
        if (currentHead.value === value) {
          previousHead.next = currentHead.next
          this.length--;
          break;
        }
        previousHead = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead.value === value) {
        previousHead.next = null;
        this.length--;
      }
    }
  };

  removeAll () {
    this.length = 0;
    this.head = null;
  };

  size () {
    return this.length;
  };
};

const removeDuplicate = function(list) {
  //We need two pointers to compare current value and the rest of the values
  var startPointer = list.head;
  while(startPointer) {
    var currPointer = startPointer.next;
    var prevPointer = startPointer;
    while(currPointer) {
      if(currPointer.value === startPointer.value) {
      prevPointer.next = currPointer.next ;
      currPointer !== null ? currPointer = currPointer.next : null;
      list.length--;
      }
      prevPointer = prevPointer.next
      currPointer !== null ? currPointer = currPointer.next : null;
    }
    startPointer = startPointer.next;
  }
  return list;
};

var testList = new Linkedlist();

testList.add(2);
testList.add(1);
testList.add(4);
testList.add(6);
testList.add(5);// testList.removeOne(4);
// testList.removeAll()
// testList.size()
// testList.add(5);
// removeDuplicate(testList)
// console.log(testList)

const removeKth = function (list, num) {
  let headPointer = list.head;
  let tailPointer = list.head;
  let prevPointer;
  while (num > 0 && headPointer.next !== null) {
    headPointer = headPointer.next;
    num--
  }
  // console.log(headPointer)
  while (headPointer.next) {
    headPointer = headPointer.next;
    prevPointer = tailPointer;
    tailPointer = tailPointer.next;
  }
  prevPointer.next = tailPointer.next;
  list.length--;
};

// console.log(removeKth(testList, 2))
// console.log(testList)

module.exports = {
  Linkedlist,
};

},{}],5:[function(require,module,exports){
class Queue {
  constructor () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  };

  enqueue (value) {
    this.storage[this.tailTracker] = value;
    this.tailTracker++;
    this.length++;
  };

  dequeue () {
    let dequeued = this.storage[this.headTracker];
    if (this.length <= 1) {
      this.storage = {};
      this.length = 0;
      this.headTracker = 0;
      this.tailTracker = 0;
    } else {
      delete this.storage[this.headTracker];
      this.headTracker++;
      // this.tailTracker--;
      this.length--;
    }
    return dequeued;
  };

  dequeueAll () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  };

  size () {
    return this.length;
  };

  isEmpty () {
    return Object.keys(this.storage).length === 0 ? true : false;
  };
};

var testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
testQueue.enqueue(4);
// testQueue.dequeue();
// testQueue.dequeueAll();
// testQueue.dequeue();
// testQueue.dequeue();

// console.log(testQueue)
// console.log(testQueue.isEmpty());

module.exports = Queue;


},{}],6:[function(require,module,exports){
class Stack {
  constructor () {
    this.storage = {};
    this.length = 0;
  };

  push (value) {
    this.storage[this.length] = value;
    this.length++;
  };

  pop () {
    let popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1]
    if (this.length > 0) {
      this.length--;
    };
    return popped;
  };

  popAll () {
    this.storage = {};
    this.length = 0;
  };

  size () {
    return this.length;
  };

  peek () {
    return this.storage[this.length - 1];
  };

  isEmpty () {
    return this.length === 0 ? true : false;
  };
};

// let testStack = new Stack();

// testStack.push(1);
// testStack.push(2);
// testStack.push(3);
// testStack.pop();
// testStack.popAll();
// testStack.push(4);
// testStack.push(5);
// testStack.peek();
// testStack.size();

// console.log(testStack);

module.exports = Stack;
},{}],7:[function(require,module,exports){
const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');
const testBinarySearchTree = require('../../chapter-four-problems/util/BinarySearchTree.js');
const chapterFourFunctions = require('../../chapter-four-problems/chapter-four-problems.js');
const testMinimalTree = chapterFourFunctions.minimalTree;
const testListOfDepth = chapterFourFunctions.listOfDepths;

(function () {
  'use strict'

  describe('Chapter 4 coding challenge test', function () {
    let testGraph = new testDirectedGraph();
    let testBinaryTree = new testBinarySearchTree();
    let sortedArray = [1, 2, 3, 4, 5, 6, 7];

    describe('Question 4.1 Test directed graph and route between node function', function () {

      beforeEach(function () {
        testGraph.addNode('A');
        testGraph.addNode('B');
        testGraph.addNode('C');
        testGraph.addNode('D');
        testGraph.addNode('E');
        testGraph.addEdge('A', 'B');
        testGraph.addEdge('A', 'C');
        testGraph.addEdge('B', 'E');
        testGraph.addEdge('D', 'B');
      });

      afterEach(function () {
        testGraph.removeAll();
      });

      it('Should have node A in graph', function () {
        expect(testGraph.contains('A')).toBe(true);
      });

      it('Should have node B in graph', function () {
        expect(testGraph.contains('B')).toBe(true);
      });

      it('Should have node C in graph', function () {
        expect(testGraph.contains('C')).toBe(true);
      });

      it('Should not have node F in graph', function () {
        expect(testGraph.contains('F')).toBe(false);
      });

      it('Should have edge from node A to B in graph', function () {
        expect(testGraph.hasEdge('A', 'B')).toBe(true);
      });

      it('Should have edge from node D to B in graph', function () {
        expect(testGraph.hasEdge('D', 'B')).toBe(true);
      });

      it('Should have edge from node E to A in graph', function () {
        expect(testGraph.hasEdge('E', 'A')).toBe(false);
      });

      it('Should have route from node A to E in graph', function () {
        expect(testGraph.routeBetweenNode('A', 'E')).toBe(true);
      });

      it('Should not have route from node A to D in graph', function () {
        expect(testGraph.routeBetweenNode('A', 'D')).toBe(false);
      });

      it('Should have route from node D to E in graph', function () {
        expect(testGraph.routeBetweenNode('D', 'E')).toBe(true);
      });

      it('Should not have route from node C to D in graph', function () {
        expect(testGraph.routeBetweenNode('C', 'D')).toBe(false);
      });
    });

    describe('Question 4.2 test minimal tree functionality', function () {

      beforeEach(function () {
        testMinimalTree(sortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should contain root node with value 4', function () {
        expect(testBinaryTree.root.value).toBe(4);
      });

      it('Should have value 2 at root note.left.value', function () {
        expect(testBinaryTree.root.left.value).toBe(2);
      });

      it('Should have value 6 at root note.right.value', function () {
        expect(testBinaryTree.root.right.value).toBe(6);
      });

      it('Should have value 7 at root note.right.right.value', function () {
        expect(testBinaryTree.root.right.right.value).toBe(7);
      });

      it('Should have value 1 at root note.left.left.value', function () {
        expect(testBinaryTree.root.left.left.value).toBe(1);
      });
    });

    describe('Question 4.3 test listOfDepth functionality', function () {

      beforeEach(function () {
        testMinimalTree(sortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should have an arrayOfList length of 3', function () {
        expect(testListOfDepth(testBinaryTree).length).toBe(3);
      });

      it('Should have value of 4 in the first list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[0].head.value).toBe(4);
      });

      it('Should have value of 2 in the second list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[1].head.value).toBe(2);
      });

      it('Should have value of 6 in the second node of second list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[1].head.next.value).toBe(6);
      });

      it('Should have value of 1 in the first node of third list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[2].head.value).toBe(1);
      });

      it('Should have value of 7 in the last node of third list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[2].head.next.next.next.value).toBe(7);
      });
    });

  });
})();
},{"../../chapter-four-problems/chapter-four-problems.js":1,"../../chapter-four-problems/util/BinarySearchTree.js":2,"../../chapter-four-problems/util/DirectedGraph.js":3}]},{},[7]);
