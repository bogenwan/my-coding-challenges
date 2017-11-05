const Node = function (value) {
  this.value = value;
  this.next = null;
};

class Linkedlist {
  constructor() {
    this.length = 0;
    this.head = null;
  };

  add (value) {
    let node = new Node(value);
    let currentHead = this.head;
    if (!currentHead) {
      this.head = node;
      this.length++;
    } else {
      while (currentHead.next) {
        currentHead = currentHead.next;
      }
      currentHead.next = node;
      this.length++;
    }
  };

  removeOne (value) {
    let currentHead = this.head;
    let previousHead = null;
    if (currentHead.value === value) {
      this.head = currentHead.next;
      this.length--;
    } else {
      previousHead = currentHead;
      currentHead = currentHead.next;
      while (currentHead.next) {
        if (currentHead.value === value) {
          previousHead.next = currentHead.next
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

  removeAll () {
    this.length = 0;
    this.head = null;
  };

  size () {
    return this.length;
  };
};

const removeDuplicate = function(list) {
  //We need two pointers to compare current value and the rest of the values
  var startPointer = list.head;
  while(startPointer) {
    var currPointer = startPointer.next;
    var prevPointer = startPointer;
    while(currPointer) {
      if(currPointer.value === startPointer.value) {
      prevPointer.next = currPointer.next ;
      currPointer !== null ? currPointer = currPointer.next : null;
      list.length--;
      }
      prevPointer = prevPointer.next
      currPointer !== null ? currPointer = currPointer.next : null;
    }
    startPointer = startPointer.next;
  }
  return list;
};

var testList = new Linkedlist();

testList.add(2);
testList.add(1);
testList.add(4);
testList.add(6);
testList.add(5);// testList.removeOne(4);
// testList.removeAll()
// testList.size()
// testList.add(5);
// removeDuplicate(testList)
// console.log(testList)

const removeKth = function (list, num) {
  let headPointer = list.head;
  let tailPointer = list.head;
  let prevPointer;
  while (num > 0 && headPointer.next !== null) {
    headPointer = headPointer.next;
    num--
  }
  // console.log(headPointer)
  while (headPointer.next) {
    headPointer = headPointer.next;
    prevPointer = tailPointer;
    tailPointer = tailPointer.next;
  }
  prevPointer.next = tailPointer.next;
  list.length--;
};

// console.log(removeKth(testList, 2))
// console.log(testList)

module.exports = {
  Linkedlist,
};
