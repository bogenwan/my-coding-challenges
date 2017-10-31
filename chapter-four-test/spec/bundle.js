(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./util/BinarySearchTree.js":2,"./util/DirectedGraph.js":3,"./util/Queue.js":4,"./util/Stack.js":5}],2:[function(require,module,exports){
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

},{"./Queue.js":4}],4:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');
const testBinarySearchTree = require('../../chapter-four-problems/util/BinarySearchTree.js');
const chapterFourFunctions = require('../../chapter-four-problems/chapter-four-problems.js');
const testMinimalTree = chapterFourFunctions.minimalTree;

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

  });
})();
},{"../../chapter-four-problems/chapter-four-problems.js":1,"../../chapter-four-problems/util/BinarySearchTree.js":2,"../../chapter-four-problems/util/DirectedGraph.js":3}]},{},[6]);
