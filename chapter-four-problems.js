class Node {
  constructor (value) {
    Object.assign(this, {
      value,
      childern: []
    });
  };
};

var node1 = new Node(1);
console.log(node1)

class Tree {
  constructor () {
    this.root = null;
  };
};