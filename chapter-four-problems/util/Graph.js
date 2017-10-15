class Graph {
  constructor (numOfVertices) {
    //  define vertex array
    this.numOfVertices = numOfVertices;
    // define adjacent list
    this.adjList = new Map();
  };
  // function to be implemented
  // addVertex(vertex)
  // addEdge(vertex, edge)
  // print Graph
  // bfs(vertex)
  // dfs(vertex)

  addVertex (vertex) {
    this.adjList.set(vertex, []);
  };

  addEdge (v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  };

  printGraph () {
    let get_keys = this.adjList.keys();
    for (let i of get_keys) {
      let get_values = this.adjList.get(i);
      let conc = '';
      for (let j of get_values) {
        conc += j + ' ';
        console.log(i + '=>' + conc);
      }
    }
  };
};

var graph = new Graph(6);
var vertices = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('a', 'b');
graph.addEdge('a', 'd');
graph.addEdge('a', 'e');
graph.addEdge('b', 'c');
graph.addEdge('d', 'e');
graph.addEdge('e', 'f');
graph.addEdge('e', 'c');
graph.addEdge('c', 'f');
// graph.addVertex('a');
// graph.addVertex('c');
// graph.addEdge('a', 'c');
graph.printGraph();

// console.log(graph);
// let myMap = new Map();

// var keyStuff = 'string stuff';
// var keyObj = {
//   firstName: 'Johnny',
//   lastName: 'Kwong'
// };
// var otherThings = 'otherNode';
// var sumNumber = 123567;
// myMap.set(sumNumber, 123)
// myMap.set(keyStuff, 'a value associated with');
// myMap.set(otherThings, 'this is a last test');
// // myMap.set(myName);
// console.log(myMap)
// console.log(myMap.get(keyStuff));
// console.log(myMap.get('string stuff'))
// console.log(myMap.get(sumNumber));
// console.log(myMap.get(123567));
// // console.log(myMap.get('Johnny'));

class Graph2 {
  constructor (numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map();
  };

  addVertex (vertex) {
    this.adjList.set(vertex, []);
  };

  addEdge (ver1, ver2) {
    adjList.get(ver1).push(ver2);
    adjList.get(ver2).push(ver1);
  };

}

module.exports = Graph;