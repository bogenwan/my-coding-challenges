// linked list constructor
const Node = function (value) {
  this.value = value;
  this.next = null;
};

const removeDub = function (linkedList) {
return linkedList;
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(3);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.dir(c)
console.log(removeDub('johnny'));