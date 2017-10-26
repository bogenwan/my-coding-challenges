(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./Queue.js":2}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');

(function () {
  'use strict'

  describe('Chapter 4 coding challenge test', function () {
    let testGraph = new testDirectedGraph();

    describe('Chapter 4.1 Test directed graph and route between node function', function () {

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

  });
})();
},{"../../chapter-four-problems/util/DirectedGraph.js":1}]},{},[3]);
