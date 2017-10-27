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
};

// let tree = new BinarySearchTree();

// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);

// console.log(tree.contain(1));