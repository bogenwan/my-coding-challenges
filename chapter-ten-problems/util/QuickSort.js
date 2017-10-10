var array = [8, 9, 4, 5, 6, 2, 7, 1, 8];

const QuickSort = function (arr) {
  let copied = arr.slice();
  let left = [], right = [];
  if (copied.length < 1) {
    return copied;
  }
  let pivot = copied.splice(copied.length - 1, 1);
  for (let i = 0; i < copied.length; i++) {
    copied[i] < pivot[0] ? left.push(copied[i]) : right.push(copied[i]);
  }
  return QuickSort(left).concat(pivot[0], QuickSort(right));
};

// console.log(QuickSort(array));

module.exports = QuickSort;