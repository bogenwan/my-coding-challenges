// var Queue = require('./Queue.js');

class Graph {
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
    while (this.nodes[node].length) {
      this.removeEdge(this.nodes[node][0], node);
    }
    delete this.nodes[node];
  };

  hasEdge (fromNode, toNode) {
    return this.nodes[fromNode].indexOf(toNode) === -1 && this.nodes[toNode].indexOf(fromNode) === -1 ? false : true;
  };

  addEdge (fromNode, toNode) {
    this.hasEdge(fromNode, toNode) ? null :
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  };

  getEdgeIndex (fromNode, toNode) {
    return this.nodes[fromNode].indexOf(toNode);
  };

  removeEdge (fromNode, toNode) {
    this.nodes[fromNode].splice(this.getEdgeIndex(fromNode, toNode), 1);
    this.nodes[toNode].splice(this.getEdgeIndex(toNode, fromNode), 1);
  };
};

var testGraph = new Graph();

testGraph.addNode('Johnny');
testGraph.addNode('Emily');
testGraph.addNode('Michelle');
testGraph.addNode('Charlene');
testGraph.addNode('Maurice');
testGraph.addEdge('Johnny', 'Emily');
testGraph.addEdge('Michelle', 'Johnny');
testGraph.addEdge('Michelle', 'Emily');
testGraph.addEdge('Charlene', 'Johnny');
testGraph.addEdge('Charlene', 'Emily');
testGraph.addEdge('Johnny', 'Maurice');
testGraph.addEdge('Emily', 'Maurice');
// testGraph.removeEdge('Emily', 'Maurice');
testGraph.removeNode('Maurice');
// testGraph.removeNode('Emily')
// console.log(testGraph.contains('Michelle'));

// console.log(testGraph.hasEdge('Maurice', 'Emily'));
console.log(testGraph)

module.exports = Graph;
