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
    for (let i = 0; i < this.nodes[node].length; i++) {
      this.removeEdge(this.nodes[node][i], node);
    }
    delete this.nodes[node];
  };

  hasEdge (fromNode, toNode) {
    this.nodes[fromNode].indexOf(toNode) === -1 && this.nodes[toNode].indexOf(fromNode) === -1 ? false : true;
  };

  addEdge (fromNode, toNode) {

    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  };

};

var testGraph = new Graph();
testGraph.addNode('a');
testGraph.addNode('b');
// console.log(testGraph.contains('a'));
console.log(testGraph)


// class Graph {
//   constructor (numOfVertices) {
//     //  define vertex array
//     this.numOfVertices = numOfVertices;
//     // define adjacent list
//     this.adjList = new Map();
//   };
//   // function to be implemented
//   // addVertex(vertex)
//   // addEdge(vertex, edge)
//   // print Graph
//   // bfs(vertex)
//   // dfs(vertex)

//   addVertex (vertex) {
//     // add the nodes
//     this.adjList.set(vertex, []);
//   };

//   addEdge (v, w) {
//     // add edge from src to other
//     this.adjList.get(v).push(w);
//     // add from other to src
//     this.adjList.get(w).push(v);
//   };

//   printGraph () {
//     // get the list of keys
//     let get_keys = this.adjList.keys();
//     // iteratr through the list of nodes
//     for (let i of get_keys) {
//       // set the value array
//       let get_values = this.adjList.get(i);
//       // create a concat variable
//       let conc = '';
//       // iterate through each value
//       for (let j of get_values) {
//         conc += j + ' ';
//         // concat the value for each pass of value and then each key
//         console.log(i + '=>' + conc);
//       }
//     }
//   };

  // bfs (startingNode) {
  //   // create a visited array
  //   var visited = [];
  //   // iterate through each number of nodes
  //   for (let i = 0; i < this.numOfVertices; i++) {
  //     // created a visited array
  //     visited[i] = false;
  //     // create an object for queue
  //     var q = new Queue();
  //     //add starting node to queue
  //     visited[startingNode] = true;
  //     q.enqueue(startingNode)
  //   }
  // };
// };

// var graph = new Graph(6);
// var vertices = ['a', 'b', 'c', 'd', 'e', 'f'];

// for (let i = 0; i < vertices.length; i++) {
//   graph.addVertex(vertices[i]);
// }

// graph.addEdge('a', 'b');
// graph.addEdge('a', 'd');
// graph.addEdge('a', 'e');
// graph.addEdge('b', 'c');
// graph.addEdge('d', 'e');
// graph.addEdge('e', 'f');
// graph.addEdge('e', 'c');
// graph.addEdge('c', 'f');
// // graph.addVertex('a');
// // graph.addVertex('c');
// // graph.addEdge('a', 'c');
// graph.printGraph();

// class Graph2 {
//   constructor (numOfVertices) {
//     this.numOfVertices = numOfVertices;
//     this.adjList = new Map();
//   };

//   addVertex (vertex) {
//     this.adjList.set(vertex, []);
//   };

//   addEdge (ver1, ver2) {
//     this.adjList.get(ver1).push(ver2);
//     this.adjList.get(ver2).push(ver1);
//   };

//   printGraph () {
//     let allKeys = this.adjList.keys();
//     for (let i of allKeys) {
//       let allValues = this.adjList.get(i);
//       let listStr = '';
//       for (let j of allValues) {
//         listStr += j + ' ';
//         console.log(i + '=>' + listStr);
//       }
//     }
//   };

// };

// let graph2 = new Graph2(6);
// let vertices2 = ['a', 'b', 'c', 'd', 'e', 'f'];

// for (let i = 0; i < vertices2.length; i++) {
//   graph2.addVertex(vertices2[i]);
// }
// graph2.addEdge('a', 'b');
// graph2.addEdge('a', 'd');
// graph2.addEdge('a', 'e');
// graph2.addEdge('b', 'c');
// graph2.addEdge('d', 'e');
// graph2.addEdge('e', 'f');
// graph2.addEdge('e', 'c');
// graph2.addEdge('c', 'f');
// graph2.printGraph();


module.exports = Graph;
