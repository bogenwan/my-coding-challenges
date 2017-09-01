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
    delete this.storage[this.length -1];
    if (this.length >= 1) {
      this.length--;
    };
  };

  size () {
    return this.length;
  };

  peek () {
    return this.storage[this.length -1];
  };
};
// var testStack = new Stack();
// testStack.push('a');
// testStack.push('b');
// testStack.pop();
// testStack.pop();
// testStack.size();
// console.log(testStack.peek());
class tripleStack {
  constructor (size) {
    this.storage = new Array(3 * size);
    this.length = size;
    this.stackTracker = {};
  };

  push (stackNum, value) {
    if (stackNum > this.length) {
      console.log('Exceed stack container limit!');
      return;
    }
    let currStack = (stackNum * 3) - 3;
    if (this.stackTracker[currStack]) {
      if (this.stackTracker[currStack] < 3) {
        let currStackPointer = this.stackTracker[currStack];
        this.storage[currStack + currStackPointer] = value;
        this.stackTracker[currStack] = currStackPointer + 1 ;
      } else {
        console.log('This stack is full, please try another stack!');
        return;
      }
    }
    else {
      this.storage[currStack] = value;
      this.stackTracker[currStack] = 1;
    };
  };
};

var es6Stack = new tripleStack(4);
es6Stack.push(1, 'a');
es6Stack.push(1, 'b');
es6Stack.push(1, 'c');
es6Stack.push(2, 'd');
es6Stack.push(2, 'e');
es6Stack.push(2, 'f');
es6Stack.push(3, 'g');
es6Stack.push(4, 'h');
es6Stack.push(4, 'hi');
es6Stack.push(4, 'hiii');
es6Stack.push(4, 'hiiii');
console.log(es6Stack);