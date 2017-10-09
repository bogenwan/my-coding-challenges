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


// var testList = new Linkedlist();

// testList.add(1);
// testList.add(2);
// testList.add(3);
// testList.add(4);
// testList.removeOne(4);
// testList.removeAll()
// testList.size()
// testList.add(5);
// console.log(testList)

module.exports = Linkedlist;

