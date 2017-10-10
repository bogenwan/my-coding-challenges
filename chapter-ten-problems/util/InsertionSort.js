var array = [8, 9, 4, 5, 6, 2, 3, 7, 1, 8];

const InsertionSort = function (arr) {
  let copied = arr.slice();
  for (let i = 0; i < copied.length; i++) {
    for (let j = 0; j < i; j++) {
      if (copied[i] < copied[j]) {
        let temp = copied.splice(i, 1);
        copied.splice(j, 0, ...temp);
      }
    }
  }
  return copied;
};

// console.log(InsertionSort(array));

module.exports = InsertionSort;