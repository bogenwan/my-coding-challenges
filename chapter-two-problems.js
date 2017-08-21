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
      previousHead.next = currentHead.next;
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

SinglyList.prototype.findKthToLast = function (num) {
  let pointer1 = this.head;
  let pointer2 = this.head;
  if (this.head === null) {
    return 'This list is empty!';
  }
  if (this.head.next === null) {
    return this.head.value;
  }
  // use for loop to move the first pointer ahead
  for (let i = 0; i < num; i++) {
    if (pointer1.next) {
      pointer1 = pointer1.next;
    }
  }
  // once first pointer reach desire distance then set both pointer to move in sync
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer2.value;
};
const testListOne = new SinglyList();
testListOne.add(1);
testListOne.add(1);
testListOne.add(2);
testListOne.add(3);
testListOne.add(3);
testListOne.add(4);
// testListOne.remove(4);
// testListOne.removeDub();

// console.log('testListOne ==>', testListOne);
console.log(testListOne.findKthToLast(4));