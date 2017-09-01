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
    }
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
    this.storage = [];
    // this.length = size;
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
        console.log(`Stack number ${stackNum} is full, please try another stack!`);
        return;
      }
    }
    else {
      this.storage[currStack] = value;
      this.stackTracker[currStack] = 1;
    }
  };

  pop (stackNum) {
    let currStack = (stackNum * 3) - 3;
    if (this.stackTracker[currStack] === 0) {
      console.log(`Stack number ${stackNum} is empty!`)
      return;
    }
    let innerStackPointer = this.stackTracker[currStack] - 1;
    let poped = this.storage[currStack + innerStackPointer];
    let splicePosition = currStack + innerStackPointer;
    this.storage.splice(splicePosition, 1);
    this.stackTracker[currStack] = innerStackPointer--;
    return poped;
  };

  peek (stackNum) {
    let currStack = (stackNum * 3) - 3;
    if (this.stackTracker[currStack] === 0) {
      console.log(`Stack number ${stackNum} is empty!`);
      return `Stack number ${stackNum} is empty!`;
    }
    let innerPointer = currStack + this.stackTracker[currStack] - 1;
    return this.storage[innerPointer];
  };

  popAll () {
    this.storage.length = 0;
    this.stackTracker = {};
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
// es6Stack.push(4, 'hiiii');
es6Stack.push(3, 'jk');
es6Stack.push(3, 'et');
es6Stack.pop(2);
es6Stack.pop(2);
es6Stack.pop(2);
// es6Stack.peek(1);
es6Stack.pop(1);
// es6Stack.peek(1);
es6Stack.pop(1);
// es6Stack.peek(1)
es6Stack.pop(1);
// es6Stack.peek(1);
// es6Stack.push(1, 'z');
// es6Stack.popAll();

// console.log(es6Stack);