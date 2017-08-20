// linked list constructor
const Node = function (value) {
  this.value = value;
  this.next = null;
};

const SinglyList = function () {
  this.length = 0;
  this.head = null;
};

SinglyList.prototype.add = function (value) {
  let node = new Node(value);
  let currentHead = this.head;
  if (!currentHead) {
    this.head = node;
    this.length++;
  } else {
    while(currentHead.next) {
      currentHead = currentHead.next;
    }
    currentHead.next = node;
    this.length++;
  }
};

SinglyList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead.value === value) {
    this.head = currentHead.next;
    this.length--;
  } else {
    let previousHead = currentHead;
    while (currentHead.next) {
      if (currentHead.value === value) {
        // console.log(currentHead.next)
        // console.log(previousHead.next)
        previousHead.next = currentHead.next;
        // console.log(previousHead.next)
        this.length--;
        break;
      }
      previousHead = currentHead;
      currentHead = currentHead.next;
    }
    if (currentHead.value === value) {
      previousHead.next = null;
      this.length--;
    }
  }
};

SinglyList.prototype.removeDub = function () {
  let storage = {};
  let previousHead;
  let currentHead = this.head;
  while (currentHead.next) {
    if (!storage[currentHead.value]) {
      storage[currentHead.value] = 1;
    } else {
      previousHead.next = currentHead.next
      this.length--;
    }
    previousHead = currentHead;
    currentHead = currentHead.next;
  }
  if (!storage[currentHead.value]) {
    storage[currentHead.value] = 1;
  } else {
    previousHead.next = currentHead.next;
    this.length--;
  }
};

const testListOne = new SinglyList();
testListOne.add(1);
testListOne.add(1);
testListOne.add(2);
testListOne.add(3);
testListOne.add(3);
testListOne.add(4);
testListOne.remove(4);
testListOne.removeDub();
console.log('testListOne ==>', testListOne)