class Stack {
  constructor () {
    this.storage = {};
    this.length = 0;
  };

  push (value) {
    this.storage[length] = value;
    this.length++;
  };

  pop () {
    let popped = this.storage[length - 1];
    delete this.storage[length - 1]
    if (this.length > 0) {
      this.length--;
    };
    return popped;
  };
};