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

  function listToNumber (list) {
    let array = [];
    let pointer = list.head;
    while(pointer) {
      array.unshift(pointer.value);
      pointer = pointer.next;
    }
    return Number(array.join(''));
  }

  let total = listToNumber(list1) + listToNumber(list2) +'';

  for (let i = total.length -1; i >= 0; i--) {
    sumList.add(Number(total[i]));
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
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  let lengthDiff = Math.abs(list1.length - list2.length);
  // fine the equal starting point and move the pointer to even position, ignore the extra node
  if (list1.length > list2.length) {
    for (let i = 0; i < lengthDiff; i++) {
      pointer1 = pointer1.next;
    }
  }
  if (list2.length > list1.length) {
    for (let i = 0; i < lengthDiff; i++) {
      pointer2 = pointer2.next;
    }
  }
  while (pointer1 !== null) {
    if (pointer1 == pointer2) {
      return pointer1;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return 'No intersection found in both list!';
};

const circularList = function (list) {
  let pointer1 = list.head;
  let pointer2 = list.head.next.next;
  while (pointer2 !== null) {
    if (pointer2.next === null || pointer2 === null) {
      return 'This is not a circular linked list!';
    }
    if (pointer2 === pointer1) {
      return pointer1.next;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  return 'This is not a circular linked list!';
};

const reverseLinkList = function (list) {
  // let repeat = list.length;
  let pre = null;
  let next = list.head.next;
  let curr = list.head;
  // console.log(headPointer, tailPointer);
  while (curr) {
    console.log('curr before pointer change', curr)
    curr.next = pre;
    console.log('curr after pointer change', curr)
    pre = curr;
    console.log('pre after change', pre)
    curr = next;
    console.log('assign curr to next', curr)
    if (next) {
      next = next.next;
    } else {
      list.head = pre;
      console.log('assigned list.head to curr', list.head)
    }
    console.log('next assign to .next', next)
  }
  // list.head = curr;
  // console.log(list.head)
  return list;
};

const testListOne = new SinglyList();
testListOne.add(1);
testListOne.add(2);
testListOne.add(3);
testListOne.add(4);
testListOne.add(5);
testListOne.add(6);
testListOne.add(7);

// console.log(testListOne);

// const testListTwo = new SinglyList();
// testListTwo.add(5);
// testListTwo.add(9);
// testListTwo.add(2);
// testListTwo.add(6);
// testListTwo.add(2);
// testListTwo.add(4);
// testListTwo.add(7);
// testListOne.removeAll();
// testListOne.removeOne(4);
// testListOne.removeDub();
// console.log(testListOne.removeMiddle(7));
// console.log(testListOne.partition(testListOne, 6));
// console.log(sumLists(testListOne, testListTwo));
// console.log(palindromeList(testListOne));
// let testListTwoPointer = testListTwo.head.next;
// console.log(testListTwoPointer);
// let testListOnePointer = testListOne.head.next.next.next;
// console.log(testListOnePointer);
// testListTwoPointer.next = testListOnePointer.next;
// testListTwo.length = 5;
// console.log(testListTwo);
// console.log(intersectionList(testListOne, testListTwo));
// testListOnePointer = testListOne.head.next.next.next.next;
// testListOnePointer.next = testListOne.head.next.next;

// console.log(circularList(testListOne));


// console.log('testListOne ==>', testListOne);
// console.log(testListOne.findKthToLast(4));
var reList = reverseLinkList(testListOne);
console.log(reList)
exports.SinglyList = SinglyList;