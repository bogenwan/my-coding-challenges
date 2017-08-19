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
    console.log(currentHead)
    console.log(previousHead)
    if (currentHead.value === value) {
      previousHead.next = null;
      this.length--;
    }
  }
};

SinglyList.prototype.removeDub = function (linkedList) {
return linkedList;
};

const testListOne = new SinglyList();
testListOne.add(1);
testListOne.add(2);
testListOne.add(3);
testListOne.remove(3);
// SinglyList.add(1);
// SinglyList.add(2);
// SinglyList.add(3);
console.log('testListOne ==>', testListOne)
// let a = new Node(1);
// let b = new Node(1);
// let c = new Node(2);
// let d = new Node(4);
// let e = new Node(3);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(a)
// console.log(removeDub('johnny'));