const Node = function (value) {
  this.value = value;
  this.next = null;
};

// linked list constructor
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

SinglyList.prototype.partition = function (mainList, num) {
  let pivot = num;
  let lowerList = new SinglyList;
  let higherList = new SinglyList;
  let currentHead = mainList.head;
  while (currentHead.next) {
    let currValue = currentHead.value;
    if (currValue < num) {
      lowerList.add(currValue);
    }
    if (currValue >= num) {
      higherList.add(currValue);
    }
    currentHead = currentHead.next;
  }
  if (currentHead.value < num) {
    lowerList.add(currentHead.value);
  } else if (currentHead.value >= num) {
    higherList.add(currentHead.value);
  }
  let secondPointer = lowerList.head;
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
  }
  secondPointer.next = higherList.head;
  lowerList.length = lowerList.length + higherList.length;
  return lowerList;
};

const sumLists = function (list1, list2) {
  let sumList = new SinglyList();
  let list1Pointer = list1.head;
  let list2Pointer = list2.head;
  let memo = 0;
  let sum = 0;

  while (list1Pointer !== null || list2Pointer !== null) {
    sum = (list1Pointer === null ? 0 : list1Pointer.value) + (list2Pointer === null ? 0 : list2Pointer.value) + memo;
    if (sum >= 10) {
      memo = Math.floor(sum / 10);
      sumList.add(sum % 10);
    } else {
      sumList.add(sum);
      memo = 0;
    }
    list1Pointer = list1Pointer === null ? null : list1Pointer.next;
    list2Pointer = list2Pointer === null ? null : list2Pointer.next;
  }
  return sumList;
};

const palindromeList = function (list) {
  let state = true;
  let currPointer = list.head;
  let runnerPointer = list.head;
  let storage = [];

  while (runnerPointer !== null && runnerPointer.next !== null) {
    storage.push(currPointer.value)
    currPointer = currPointer.next;
    runnerPointer = runnerPointer.next.next;
  }
  if (runnerPointer === null) {
    while (currPointer !== null) {
      if (currPointer.value !== storage.pop()) {
        state = false;
        break;
      }
      currPointer = currPointer.next;
    }
  }
  else if (runnerPointer.next === null) {
    currPointer = currPointer.next
    while (currPointer !== null) {
      if (currPointer.value !== storage.pop()) {
        state = false;
        break;
      }
      currPointer = currPointer.next;
    }
  }
  return state;
};

const intersectionList = function (list1, list2) {
  let storage = [];
  return storage;
};

const testListOne = new SinglyList();
testListOne.add(1);
testListOne.add(2);
testListOne.add(3);
testListOne.add(4);
// testListOne.add(1);
// testListOne.add(1);
// testListOne.add(4);

const testListTwo = new SinglyList();
testListTwo.add(5);
testListTwo.add(6);
testListTwo.add(2);
testListTwo.add(7);
// testListTwo.add(1);
// testListTwo.add(4);
// testListOne.removeAll();
// testListOne.removeOne(4);
// testListOne.removeDub();
// console.log(testListOne.removeMiddle(7));
// console.log(testListOne.partition(testListOne, 6));
// console.log(sumLists(testListOne, testListTwo));
// console.log(palindromeList(testListOne));
console.log(intersectionList(testListOne, testListTwo));


// console.log('testListOne ==>', testListOne);
// console.log(testListOne.findKthToLast(4));