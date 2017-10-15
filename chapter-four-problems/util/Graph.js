class Graph {
  constructor (numOfVertices) {
    //  define vertex array
    this.numOfVertices;
    // define adjacent list
    this.ajdList = new Map();
  };
  // function to be implemented
  // addVertex(vertex)
  // addEdge(vertex, edge)
  // print Graph
  // bfs(vertex)
  // dfs(vertex)

  addVertex (vertex) {
    this.ajdList.set(vertex, []);
  };

  addEdge (v, w) {
    this.ajdList.get(v).push(w);
    this.ajdList.get(w).push(v);
  }
};

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

module.exports = Graph;