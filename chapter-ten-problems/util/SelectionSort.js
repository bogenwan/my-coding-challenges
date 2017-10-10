var array = [3, 7, 9, 6, 2, 4, 1, 0, 8, 5];

const SelectionSort = function (arr) {
  let copied = arr.slice();
  for (let i = 0; i < copied.length; i++) {
    for (let j = i + 1; j < copied.length; j++) {
      if (copied[j] < copied[i]) {
        let temp = copied[j];
        copied[j] = copied[i];
        copied[i] = temp;
      }
    }
  }
  return copied;
};

console.log(SelectionSort(array));

module.exports = SelectionSort;