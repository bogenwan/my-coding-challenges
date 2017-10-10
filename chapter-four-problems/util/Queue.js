class Queue {
  constructor () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  };

  enqueue (value) {
    this.storage[this.length] = value;
    this.tailTracker++;
    this.length++;
  };

  dequeue () {
    let dequeued = this.storage[this.headTracker];
    delete this.storage[this.headTracker];
    this.headTracker++;
    if (this.length > 0) {
      this.length--;
    }
    return dequeued;
  };

  dequeueAll () {
    this.storage = {};
    this.headTracker = 0;
    this.tailTracker = 0;
    this.length = 0;
  };

  size () {
    return this.length;
  };

  isEmpty () {
    return Object.keys(this.storage).length === 0 ? true : false;
  };
};

var testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.dequeue();
testQueue.dequeueAll();
testQueue.enqueue(4);

console.log(testQueue)
console.log(testQueue.isEmpty());

module.exports = Queue;

