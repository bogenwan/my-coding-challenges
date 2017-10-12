var array = [8, 9, 4, 5, 6, 2, 7, 1, 8];

const QuickSort = function (arr) {
  let left = [], right = [];
  if (arr.length < 1) {
    return arr;
  }
  let pivot = arr.splice(arr.length - 1, 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot[0] ? left.push(arr[i]) : right.push(arr[i]);
  }
  return QuickSort(left).concat(pivot[0], QuickSort(right));
};

// console.log(QuickSort(array));

module.exports = QuickSort;