var array = [3, 7, 9, 6, 2, 4, 1, 0, 8, 2, 5, 13, 10];

const swap = function (arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const SelectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    min !== i ? swap(arr, i, min) : null;
  }
  return arr;
};

console.log(SelectionSort(array));



module.exports = SelectionSort;