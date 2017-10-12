var array = [8, 9, 4, 5, 6, 2, 3, 7, 1, 8];

function swap (arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};


const HeapSort = function (arr) {
  // need to implement maxHeapify first
  return arr;
};

console.log(HeapSort(array));

module.exports = HeapSort;