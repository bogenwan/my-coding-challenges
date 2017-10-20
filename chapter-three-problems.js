
// const SinglyList = require('./chapter-two-problems');

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

class MinStack {
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
var testStack = new MinStack();
testStack.push(5);
testStack.push(-1);
testStack.push(3);
testStack.push(4);
testStack.push(2);
testStack.push(-2);
// testStack.push(5);
// testStack.push(8);
// testStack.push(9);
// testStack.push(5);
// testStack.push(2);
testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.popAll();
// console.log(testStack.peekMin());
console.log(testStack.peekMin());

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
    let poped = this.storage[this.length -1];
    delete this.storage[this.length -1];
    if (this.length > 0) {
      this.length--;
    }
    return poped;
  };

  peek () {
    return this.storage[this.length -1];
  };

  getSize () {
    return this.length;
  };

  popAll () {
    this.storage = {};
    this.length = 0;
  };
};

class QueueViaStack {
  constructor () {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  };

  enqueue (value) {
    this.inputStack.push(value);
  };

  dequeue () {
    if (!this.outputStack.getSize() && !this.inputStack.getSize()) {
      return 'Queue is empty!';
    }
    if (!this.outputStack.getSize() && this.inputStack.getSize()) {
      while (this.inputStack.getSize()) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop();
  };

  dequeueAll () {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  };
};

// queueViaStack1 = new QueueViaStack();
// queueViaStack1.enqueue('a');
// queueViaStack1.enqueue('b');
// queueViaStack1.enqueue('c');
// queueViaStack1.enqueue('d');
// queueViaStack1.dequeue();
// queueViaStack1.enqueue('e');
// queueViaStack1.dequeue();
// queueViaStack1.enqueue('f');
// queueViaStack1.dequeue();
// queueViaStack1.dequeue();
// queueViaStack1.dequeue();
// queueViaStack1.dequeue();
// queueViaStack1.dequeue();
// queueViaStack1.enqueue('g');
// queueViaStack1.dequeueAll();
// queueViaStack1.dequeue();
// queueViaStack1.dequeue();
// console.log(queueViaStack1.dequeue());
// console.log(queueViaStack1.dequeue());

// console.log(queueViaStack1);

const sortStack = function (stack) {
  let helperStack = new Stack();
  let curr;
  while (stack.length) {
    if (!helperStack.length) {
      helperStack.push(stack.pop());
    }
    curr = stack.peek();
    if (curr < helperStack.peek()) {
      helperStack.push(stack.pop());
    } else {
      let temp = stack.pop();
      while (helperStack.length) {
        stack.push(helperStack.pop());
      }
      helperStack.push(temp);
    }
  }
  return helperStack;
};

// var testStack1 = new Stack();
// testStack1.push(4);
// testStack1.push(2);
// testStack1.push(3);
// testStack1.push(1);
// var sortedStack1 = sortStack(testStack1);
// sortedStack1.popAll();
// console.log(sortedStack1);
// sortedStack1.pop();
// console.log( sortedStack1);
class Animal {
  constructor(type, name) {
    // this.id = id;
    this.type = type;
    this.name = name;
  }
};

class Queue {
  constructor () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  }

  enqueue (value) {
    this.storage[this.tailTracker] = value;
    this.tailTracker++;
    this.length++;
  };

  dequeue () {
    let popped = this.storage[this.headTracker];
    delete this.storage[this.headTracker];
    this.headTracker++;
    if (this.length > 0) {
      this.length--;
    }
    return popped;
  };

  peek () {
    if (Object.keys(this.storage).length === 0) {
      return 'This storage is empty!'
    } else {
      return this.storage[this.headTracker];
    }
  };

  dequeueAll () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  };

  isEmpty () {
    if (Object.keys(this.storage).length === 0) {
      return true;
    } else {
      return false;
    }
  };
};

// var myQueue = new Queue();
// myQueue.enqueue(new Animal('dog', 'Wilbur'));
// myQueue.enqueue(new Animal('cat', 'Milko'));
// myQueue.enqueue(new Animal('cat', 'Creamy'));
// myQueue.dequeue();
// myQueue.peek();
// console.log(myQueue.isEmpty());
// console.log(myQueue)

class AnimalShelter {
  constructor () {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
    this.id = 0;
  };

  enqueue (animal) {
    animal.id = this.id;
    if (animal.type === 'cat') {
      this.catQueue.enqueue(animal);
    } else if (animal.type === 'dog') {
      this.dogQueue.enqueue(animal);
    }
    this.id++;
  };

  dequeueAny () {
    if (this.catQueue.isEmpty() && this.dogQueue.isEmpty()) {
      return 'Shelter is empty!';
    }
    if (this.catQueue.isEmpty() && !this.dogQueue.isEmpty()) {
      return this.dogQueue.dequeue();
    } else if (!this.catQueue.isEmpty() && this.dogQueue.isEmpty()) {
      return this.catQueue.dequeue();
    } else {
      let catID = this.catQueue.peek().id;
      let dogID = this.dogQueue.peek().id;
      if (catID < dogID) {
        this.catQueue.dequeue();
      } else {
        this.dogQueue.dequeue();
      }
    }
  };

  dequeueCat () {
    if (this.catQueue.isEmpty()) {
      return 'No more cats available!'
    } else {
      return this.catQueue.dequeue();
    }
  };

  dequeueDog () {
    if (this.dogQueue.isEmpty()) {
      return 'No more dogs available!'
    } else {
      return this.dogQueue.dequeue();
    }
  };

  dequeueAll () {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
    this.id = 0;
  };
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const threeArrayStack = function (arr, numOfStack, valPerStack) {
  let arrayStack = new Array(numOfStack).fill(null);

  arrayStack = arrayStack.map((elem) => {
    return elem = new Stack();
  });
  let currStackCounter = 0;
  for (let i = 0; i < arr.length; i+= valPerStack) {
    for (let j = i; j < i + valPerStack; j++) {
      arrayStack[currStackCounter].push(arr[j]);
    }
    currStackCounter = currStackCounter + 1;
  }
  return arrayStack;
};

// console.log(threeArrayStack(array, 3, 3));

// var testShelter = new AnimalShelter();
// testShelter.enqueue(new Animal('cat', 'Milko'));
// testShelter.dequeueCat();
// testShelter.dequeueCat();
// console.log(testShelter.catQueue.peek());
// testShelter.enqueue(new Animal('dog', 'Barky'));
// testShelter.enqueue(new Animal('cat', 'Creamy'));
// testShelter.dequeueAll();
// testShelter.dequeueAny();
// testShelter.dequeueAny();
// testShelter.dequeueAny();
// testShelter.enqueue(new Animal('dog', 'Chad'));
// testShelter.enqueue(new Animal('cat', 'Creamy'));
// testShelter.dequeueAny();
// console.log(testShelter.dequeueDog());
// console.log(testShelter.dequeueDog());
// console.log(testShelter);

// var linkedList1 = new SinglyList.SinglyList();
// console.log(linkedList1)