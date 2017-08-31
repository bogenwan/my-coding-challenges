const Stack = function () {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.length++;
  this.storage[this.length] = value;
}

var testStack = new Stack();
testStack.push(3);
testStack.push(4);
console.log(testStack)