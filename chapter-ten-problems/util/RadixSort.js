const Queue = require('./Queue');

var array = [33, 77, 5, 46, 835, 976, 23, 16, 203, 9, 2, 547];

const RadixSort = function (arr) {
  let copied = arr.slice();
  let maxDigit = Math.max(...copied).toString().length;
  let allBuckets = new Array(10).fill(new Queue());
  console.log(allBuckets)

};

console.log(RadixSort(array));

module.exports = RadixSort;