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