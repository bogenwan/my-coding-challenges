const Queue = require('./Queue');

var array = [33, 77, 5, 46, 835, 976, 23, 16, 203, 9, 2, 547];

const RadixSort = function (arr) {
  let copied = arr.slice();
  let maxDigit = Math.max(...copied).toString().length;
  let padding = '0'.repeat(maxDigit);
  let allBuckets = new Array(10).fill(new Queue());
  while (maxDigit > 0) {
    for (let i = 0; i < copied.length; i++) {
      // round each number to max digit
      // check the least signifigant digit
      let paddedString = padding.substring(0, padding.length - copied[i].toString().length) + copied[i];
      let assignedBucketNum = paddedString[maxDigit -1];
      if (assignedBucketNum === 0) {
        allBuckets[0].enqueue(copied[i]);
      } else {
        allBuckets[assignedBucketNum].enqueue(copied[i]);
      }
    }
    let inputCoutner = 0;
    for (let key in allBuckets) {
      console.log(allBuckets[key])
      // while (allBuckets[key].isEmpty() === false) {
      //   copied[inputCoutner] = allBuckets[key].dequeue();
      //   inputCoutner++;
      //   console.log(copied)
      // }
    }
    console.log('maxDigit', maxDigit)
    maxDigit--;
  }
  return copied;
};

console.log(RadixSort(array));

module.exports = RadixSort;