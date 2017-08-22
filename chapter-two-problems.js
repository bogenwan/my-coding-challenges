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

SinglyList.prototype.removeOne = function (value) {
  let currentHead = this.head;
  if (currentHead.value === value) {
    this.head = currentHead.next;
    this.length--;
  } else {
    let previousHead = currentHead;
    while (currentHead.next) {
      if (currentHead.value === value) {
        previousHead.next = currentHead.next;
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

SinglyList.prototype.removeAll = function () {
  this.head = null;
  this.length = 0;
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

SinglyList.prototype.removeMiddle = function (value) {
  if (this.head === null) {
    return 'This list is empty!';
  }
  if (this.head.value === value || this.head.next.next === null) {
    return 'Can\'t remove head or last node';
  }
  let previousHead = this.head;
  let currentHead = this.head.next;
  while (currentHead.next) {
    if (currentHead.value === value && currentHead.next !== null) {
      previousHead.next = currentHead.next;
      this.length--;
      break;
    }
    previousHead = previousHead.next;
    currentHead = currentHead.next;
  }
  if (currentHead.value === value && currentHead.next === null) {
    return 'Can\'t remove head or last node';
  }
  return 'No such value in this list';
};
// const testListOne = new SinglyList();
// testListOne.add(1);
// testListOne.add(2);
// testListOne.add(6);
// testListOne.add(3);
// testListOne.add(5);
// testListOne.add(4);
// testListOne.removeAll();
// testListOne.removeOne(4);
// testListOne.removeDub();
// console.log(testListOne.removeMiddle(7));

// console.log('testListOne ==>', testListOne);
// console.log(testListOne.findKthToLast(4));