// var Queue = require('./Queue.js');

class UndirectedGraph {
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

// var testUndirectedGraph = new UndirectedGraph();

// testUndirectedGraph.addNode('Johnny');
// testUndirectedGraph.addNode('Emily');
// testUndirectedGraph.addNode('Michelle');
// testUndirectedGraph.addNode('Charlene');
// testUndirectedGraph.addNode('Maurice');
// testUndirectedGraph.addEdge('Johnny', 'Emily');
// testUndirectedGraph.addEdge('Michelle', 'Johnny');
// testUndirectedGraph.addEdge('Michelle', 'Emily');
// testUndirectedGraph.addEdge('Charlene', 'Johnny');
// testUndirectedGraph.addEdge('Charlene', 'Emily');
// testUndirectedGraph.addEdge('Johnny', 'Maurice');
// testUndirectedGraph.addEdge('Emily', 'Maurice');
// testUndirectedGraph.removeEdge('Emily', 'Maurice');
// testUndirectedGraph.removeNode('Maurice');
// testUndirectedGraph.removeNode('Emily')
// console.log(testUndirectedGraph.contains('Michelle'));

// console.log(testUndirectedGraph.hasEdge('Maurice', 'Emily'));
// console.log(testUndirectedGraph)

module.exports = UndirectedGraph;
