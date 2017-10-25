(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
};

const testDirectedGraph = new DirectedGraph();

// testDirectedGraph.addNode('Johnny');
// testDirectedGraph.addNode('Emily');
// testDirectedGraph.addNode('Maurice');
// testDirectedGraph.addEdge('Johnny', 'Maurice');
// testDirectedGraph.addEdge('Emily', 'Johnny');
// testDirectedGraph.removeEdge('Johnny', 'Maurice');
// testDirectedGraph.removeNode('Emily');
// console.log(testDirectedGraph.contains('Maurice'));

// console.log(testDirectedGraph);

module.exports = DirectedGraph;

},{}],2:[function(require,module,exports){
const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');

(function () {
  'use strict'

  describe('Chapter 4 test', function () {
    let testGraph = new testDirectedGraph();
    testGraph.addNode('A')
    console.log(testGraph)
    it('Should show a graph', function () {
      expect(true).toBe(true);
    });
  });

})();
},{"../../chapter-four-problems/util/DirectedGraph.js":1}]},{},[2]);
