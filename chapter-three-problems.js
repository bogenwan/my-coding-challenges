
class TripleStack {
  constructor (size) {
    this.storage = [];
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

// var es6Stack = new TripleStack(4);
// es6Stack.push(1, 'a');
// es6Stack.push(1, 'b');
// es6Stack.push(1, 'c');
// es6Stack.push(2, 'd');
// es6Stack.push(2, 'e');
// es6Stack.push(2, 'f');
// es6Stack.push(3, 'g');
// es6Stack.push(4, 'h');
// es6Stack.push(4, 'hi');
// es6Stack.push(4, 'hiii');
// es6Stack.push(4, 'hiiii');
// es6Stack.push(3, 'jk');
// es6Stack.push(3, 'et');
// es6Stack.pop(2);
// es6Stack.pop(2);
// es6Stack.pop(2);
// es6Stack.peek(1);
// es6Stack.pop(1);
// es6Stack.peek(1);
// es6Stack.pop(1);
// es6Stack.peek(1)
// es6Stack.pop(1);
// es6Stack.peek(1);
// es6Stack.push(1, 'z');
// es6Stack.popAll();

// console.log(es6Stack);

class Stack {
  constructor () {
    this.storage = {};
    this.minStorage = {};
    this.minStoreIndex = 0;
    this.length = 0;
  };

  push (value) {
    this.storage[this.length] = value;
    this.length++;
    if (!this.minStorage[this.minStoreIndex]) {
      this.minStorage[this.minStoreIndex] = value;
    } else if (value <= this.minStorage[this.minStoreIndex]) {
      this.minStoreIndex++;
      this.minStorage[this.minStoreIndex] = value;
    }
  };

  pop () {
    let poped = this.storage[this.length -1];
    delete this.storage[this.length -1];
    if (this.length >= 1) {
      this.length--;
    }
    if (poped === this.minStorage[this.minStoreIndex]) {
      delete this.minStorage[this.minStoreIndex];
      if (this.minStoreIndex > 0) {
        this.minStoreIndex--;
      }
    }
  };

  size () {
    return this.length;
  };

  peek () {
    return this.storage[this.length -1];
  };

  peekMin () {
    return this.minStorage[this.minStoreIndex];
  };

  popAll () {
    this.storage = {};
    this.minStorage = {};
    this.minStoreIndex = 0;
    this.length = 0;
  };
};
// var testStack = new Stack();
// testStack.push(7);
// testStack.push(5);
// testStack.push(8);
// testStack.push(9);
// testStack.push(5);
// testStack.push(2);
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.popAll();
// console.log(testStack.peekMin());
// console.log(testStack);

class SetOfStack {
  constructor (num) {
    this.storage = {};
    this.compacity = num;
    this.subStackCompacity = this.compacity -1;
    this.subStackCounter = 0;
    this.subStackStorage = 0;
  };

  push (value) {
    if (!this.storage[this.subStackCounter]) {
      this.storage[this.subStackCounter] = {};
      let subStack = this.storage[this.subStackCounter];
      subStack[this.subStackStorage] = value;
      this.subStackStorage++;
    } else if (this.storage[this.subStackCounter] && this.subStackStorage <= this.subStackCompacity) {
      let subStack = this.storage[this.subStackCounter];
      subStack[this.subStackStorage] = value;
      this.subStackStorage++;
    } else if (this.storage[this.subStackCounter] && this.subStackStorage  > this.subStackCompacity) {
      this.subStackStorage = 0;
      this.subStackCounter++;
      this.storage[this.subStackCounter] = {};
      let subStack = this.storage[this.subStackCounter];
      subStack[this.subStackStorage] = value;
      this.subStackStorage++;
    }
  };

  pop () {
    if (!this.storage[this.subStackCounter]) {
      let message = 'setOfStack is empty!';
      console.log(message);
      return message;
    }
    if (this.storage[this.subStackCounter] && this.subStackStorage > 0) {
      let subStack = this.storage[this.subStackCounter];
      let popped = subStack[this.subStackStorage - 1];
      delete subStack[this.subStackStorage - 1];
      this.subStackStorage--;
      if (this.subStackStorage === 0) {
        delete this.storage[this.subStackCounter];
        this.subStackCounter--;
        this.subStackStorage = this.subStackCompacity + 1;
      }
      if (!this.storage[this.subStackCounter]) {
        this.storage = {};
        this.subStackCompacity = this.compacity -1;
        this.subStackCounter = 0;
        this.subStackStorage = 0;
      }
      return popped;
    }
  };

  peek () {
    if (Object.keys(this.storage).length  === 0) {
      let message = 'setOfStack is empty!';
      console.log(message);
      return message;
    } else {
      let subStack = this.storage[this.subStackCounter];
      return subStack[this.subStackStorage -1];
    }
  };

  popAll () {
    this.storage = {};
    this.subStackCompacity = this.compacity -1;
    this.subStackCounter = 0;
    this.subStackStorage = 0;
  };

};

// var setOfStack1 = new SetOfStack(3);
// setOfStack1.push('a');
// setOfStack1.push('b');
// setOfStack1.push('c');
// setOfStack1.push('d');
// setOfStack1.push('e');
// setOfStack1.push('f');
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.popAll();
// setOfStack1.push('z');
// setOfStack1.push('v');
// setOfStack1.push('w');
// setOfStack1.push('x');
// setOfStack1.push('k');
// setOfStack1.pop();
// setOfStack1.pop();
// setOfStack1.pop();
// console.log(setOfStack1.storage);
// console.log(setOfStack1.pop());
// console.log(setOfStack1.storage);
// console.log(setOfStack1.pop());
// console.log(setOfStack1.storage);
class BasicStack {
  constructor () {
    this.storage = {};
  }
};

class QueueViaStack {
  constructor (size) {
  this.storage = {};
  this.stack1 = new Stack
  };
};